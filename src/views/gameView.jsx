import React, { Component } from "react";
import GameBoard from "../components/gameBoard";
import GameHeader from "../components/gameHeader";

class GameView extends Component {
  state = {
    points: 0,
    sequence: 1
  };

  updatePoints = amount => {
    let { points, sequence } = this.state;
    const { level } = this.props;
    if (amount === 0) {
      sequence = 1;
      this.setState({ sequence });
    } else {
      if (amount < 0) {
        if (points > 0) {
          points += amount;
          sequence = 1;
        }
      } else {
        const pointsByLevel = level === "easy" ? 1 : level === "meduim" ? 2 : 3;
        points += sequence * pointsByLevel;
        sequence += 1;
      }
      this.setState({ points, sequence });
    }
  };

  handleNewGame = () => {};

  backToEntry = () => {};

  render() {
    const { level } = this.props;
    const { points } = this.state;
    return (
      <div className="game-view">
        <GameHeader points={points} />
        <GameBoard level={level} updatePoints={this.updatePoints} />
      </div>
    );
  }
}

export default GameView;
