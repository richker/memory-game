import React, { Component } from "react";
import GameCard from "./gameCard";
import { createNewGame } from "../services/initGame";

class GameBoard extends Component {
  state = {
    gameBoard: [],
    selectedIndex: null
  };

  initGame = gameLevel => {
    let gameSize;
    switch (gameLevel) {
      case "easy":
        gameSize = 10;
        break;
      case "meduim":
        gameSize = 20;
        break;
      case "hard":
        gameSize = 30;
        break;
    }
  };

  componentDidMount() {
    const gameBoard = createNewGame("hard");
    this.setState({ gameBoard });
  }

  handleSelectCard = index => {
    let { selectedIndex, gameBoard } = this.state;
    if (selectedIndex === null) {
      // when no open card
      gameBoard[index].isOpen = true;
      this.setState({ selectedIndex: index, gameBoard });
    } else {
      // check if has cards match
      const firstCard = gameBoard[selectedIndex];
      const secondCard = gameBoard[index];
      if (
        firstCard.color === secondCard.color &&
        firstCard.pattern === secondCard.pattern
      ) {
        // cards match
        gameBoard[selectedIndex].isDone = true;
        gameBoard[index].isDone = true;
      } else {
        //  no cards match
        gameBoard[index].isOpen = false;
        this.setState({ selectedIndex: null, gameBoard });
      }
    }
  };

  render() {
    const EmptyCard = ({ size }) => <div className="empty-card" />;
    const { gameBoard } = this.state;

    return (
      <div className="board-game">
        {gameBoard.map((card, index) => {
          console.log("card", card);
          console.log("index", index);
          return <GameCard color={card.color} pattern={card.pattern} />;
        })}
      </div>
    );
  }
}

export default GameBoard;
