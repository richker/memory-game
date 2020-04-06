import React, { Component } from "react";
import GameBoard from "../components/gameBoard";
import GameHeader from "../components/gameHeader";
import { createNewGame } from "../services/initGame";
import { checkMatch, updatePoints } from "../services/playService";

class GameView extends Component {
  state = {
    gameBoard: [],
    selectedIndex: null,
    points: 0,
    sequence: 1,
  };

  componentDidMount() {
    const gameBoard = createNewGame(this.props.level);
    this.setState({ gameBoard });
  }

  handleSelectCard = (index) => {
    let { selectedIndex, gameBoard, points, sequence } = this.state;
    if (selectedIndex === null) {
      // when no open card
      gameBoard[index].isOpen = true;
      this.setState({ selectedIndex: index, gameBoard });
    } else {
      gameBoard[index].isOpen = true;
      this.setState({ gameBoard });
      setTimeout(() => {
        const { level } = this.props;
        const matchResult = checkMatch(gameBoard, selectedIndex, index);
        const updateResult = updatePoints(
          points,
          sequence,
          matchResult.amount,
          level
        );
        this.setState({
          gameBoard: matchResult.gameBoard,
          points: updateResult.points,
          sequence: updateResult.sequence,
          selectedIndex: null,
        });
      }, 350);
    }
  };

  handleNewGame = () => {
    const gameBoard = createNewGame(this.props.level);
    this.setState({
      gameBoard,
      selectedIndex: null,
      points: 0,
      sequence: 1,
    });
  };

  handleBack = () => {
    console.log("back!");
  };

  render() {
    const { points, gameBoard } = this.state;
    const { level } = this.props;
    console.log("level", level);
    return (
      <div className="view game">
        <GameHeader
          onNew={this.handleNewGame}
          onBack={this.backToEntry}
          points={points}
        />

        <GameBoard
          level={level}
          gameBoard={gameBoard}
          onSelectCard={this.handleSelectCard}
        />
      </div>
    );
  }
}

export default GameView;
