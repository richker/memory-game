import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import GameBoard from "../components/gameBoard";
import GameHeader from "../components/gameHeader";
import { createNewGame } from "../services/initGame";
import { checkMatch, updatePoints, isGameOver } from "../services/playService";

class GameView extends Component {
  state = {
    gameBoard: [],
    selectedIndex: null,
    points: 0,
    sequence: 1,
    level: null,
    redirect: false,
    gameDone: false,
  };

  componentDidMount() {
    const gameBoard = createNewGame(this.props.location.state.level);
    this.setState({ gameBoard, level: this.props.location.state.level });
  }

  handleSelectCard = (index) => {
    let { selectedIndex, gameBoard, points, sequence, level } = this.state;
    console.log("level");
    if (selectedIndex === null) {
      // when no open card
      gameBoard[index].isOpen = true;
      this.setState({ selectedIndex: index, gameBoard });
    } else {
      gameBoard[index].isOpen = true;
      this.setState({ gameBoard });
      setTimeout(() => {
        const { level } = this.state;
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
        const gameDone = isGameOver(matchResult.gameBoard);
        this.setState({ gameDone });
        if (gameDone) {
          setTimeout(() => {
            this.setState({ redirect: true });
          }, 2000);
        }
      }, 550);
    }
  };

  handleNewGame = () => {
    const gameBoard = createNewGame(this.state.level);
    this.setState({
      gameBoard,
      selectedIndex: null,
      points: 0,
      sequence: 1,
    });
  };

  handleBack = () => {
    this.setState({ redirect: true });
  };

  render() {
    const { points, gameBoard, level, redirect, gameDone } = this.state;
    if (redirect) {
      return <Redirect to={{ pathname: "/enter" }} />;
    }
    return (
      <div className="view game">
        <GameHeader
          onNew={this.handleNewGame}
          onBack={this.handleBack}
          points={points}
        />

        <div className="board-area">
          <GameBoard
            level={level}
            gameBoard={gameBoard}
            onSelectCard={this.handleSelectCard}
          />
        </div>
        <div
          className={
            "game-done-card" + (gameDone ? " long-fade-in" : "fade-out")
          }
        >
          {gameDone && "Completed !"}
        </div>
      </div>
    );
  }
}

export default GameView;
