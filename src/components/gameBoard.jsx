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
    const gameBoard = createNewGame(this.props.level);
    this.setState({ gameBoard });
  }

  checkMatch = (firstIndex, secondIndex) => {
    let amount = 0;
    let { gameBoard } = this.state;
    if (firstIndex !== secondIndex) {
      let firstCard = gameBoard[firstIndex];
      let secondCard = gameBoard[secondIndex];
      if (
        // CARDS MATCH
        firstCard.color === secondCard.color &&
        firstCard.pattern === secondCard.pattern
      ) {
        firstCard.isDone = true;
        secondCard.isDone = true;
        firstCard.isOpen = false;
        secondCard.isOpen = false;
        gameBoard[firstIndex] = firstCard;
        gameBoard[secondIndex] = secondCard;
        amount = 1;
      } else {
        // NO CARDS MATCH
        firstCard.isOpen = false;
        secondCard.isOpen = false;
        gameBoard[firstIndex] = firstCard;
        gameBoard[secondIndex] = secondCard;

        amount = 0;
      }
    } else {
      let card = gameBoard[secondIndex];
      card.isOpen = false;
      gameBoard[secondIndex] = card;
      amount = -1;
    }
    this.setState({ gameBoard, selectedIndex: null });
    this.props.updatePoints(amount);
  };

  handleSelectCard = index => {
    let { selectedIndex, gameBoard } = this.state;
    if (selectedIndex === null) {
      // when no open card
      gameBoard[index].isOpen = true;
      this.setState({ selectedIndex: index, gameBoard });
    } else {
      gameBoard[index].isOpen = true;
      this.setState({ gameBoard });
      setTimeout(() => {
        this.checkMatch(selectedIndex, index);
      }, 350);
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
