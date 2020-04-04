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

  checkMatch = (firstIndex, secondIndex) => {
    let { gameBoard } = this.state;
    let firstCard = gameBoard[firstIndex];
    let secondCard = gameBoard[secondIndex];
    if (
      firstCard.color === secondCard.color &&
      firstCard.pattern === secondCard.pattern
    ) {
      firstCard.isDone = true;
      secondCard.isDone = true;
      firstCard.isOpen = false;
      secondCard.isOpen = false;
      gameBoard[firstIndex] = firstCard;
      gameBoard[secondIndex] = secondCard;
      this.setState({ gameBoard, selectedIndex: null });
    } else {
      firstCard.isOpen = false;
      secondCard.isOpen = false;
      gameBoard[firstIndex] = firstCard;
      gameBoard[secondIndex] = secondCard;
      this.setState({ gameBoard, selectedIndex: null });
    }
  };

  handleSelectCard = index => {
    let { selectedIndex, gameBoard } = this.state;
    if (selectedIndex === null) {
      // when no open card
      gameBoard[index].isOpen = true;
      this.setState({ selectedIndex: index, gameBoard });
    } else {
      gameBoard[index].isOpen = true;
      this.setState({ gameBoard }, () =>
        setTimeout(this.checkMatch(selectedIndex, index), 3000)
      );
    }
  };

  render() {
    // const EmptyCard = ({ size }) => <div className="empty-card" />;
    const { gameBoard } = this.state;

    return (
      <div className="board-game">
        {gameBoard.map((card, index) => {
          if (card.isDone) return <div className="empty-card" />;
          return (
            <GameCard
              key={index}
              index={index}
              card={card}
              onSelect={this.handleSelectCard}
            />
          );
        })}
      </div>
    );
  }
}

export default GameBoard;
