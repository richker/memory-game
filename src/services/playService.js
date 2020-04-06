export const checkMatch = (gameBoard, firstIndex, secondIndex) => {
  let amount = 0;
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
  return { gameBoard, amount };
};

export const updatePoints = (points, sequence, amount, level) => {
  if (amount === 0) {
    sequence = 1;
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
  }
  return { points, sequence };
};

export const isGameOver = (gameBoard) => {
  const isDone = (card) => card.isDone;
  return gameBoard.every(isDone);
};
