import React from "react";
import GameCard from "./gameCard";

const GameBoard = ({ gameBoard, onSelectCard, level }) => {
  return (
    <div className={`board-game ${level}`}>
      {gameBoard.map((card, index) => {
        if (card.isDone) return <div className="empty-card" />;
        return (
          <GameCard
            key={index}
            index={index}
            card={card}
            onSelect={onSelectCard}
          />
        );
      })}
    </div>
  );
};

export default GameBoard;
