import React, { Component } from "react";
import BoardArea from "../components/boardArea";

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

  render() {
    const { level } = this.props;
    const { points } = this.state;
    return (
      <React.Fragment>
        {/* HEADER */}
        <div style={{ color: "#FFFFFF" }}>POINTS: {points}</div>
        <BoardArea level={level} updatePoints={this.updatePoints} />
      </React.Fragment>
    );
  }
}

export default GameView;
