import {
  faCrow,
  faCat,
  faDog,
  faDragon,
  faFish,
  faFrog,
  faHippo,
  faHorse,
  faSpider,
  faOtter,
  faSnowman,
  faRobot,
  faDice,
  faSplotch,
  faPalette
} from "@fortawesome/free-solid-svg-icons";

const colorBank = [
  "#90C53F",
  "#EC1B30",
  "#FEA410",
  "#5E25CA",
  "#81308D",
  "#12B0DF",
  "#FF6300",
  "#3FAF4B",
  "#E51668",
  "#BA1E83",
  "#9A57B4",
  "#596774",
  "#34495E",
  "#2A80B9",
  "#576474"
];

const patternBank = [
  faOtter,
  faCrow,
  faCat,
  faDog,
  faDragon,
  faFish,
  faFrog,
  faHippo,
  faHorse,
  faSpider,
  faSnowman,
  faRobot,
  faDice,
  faSplotch,
  faPalette
];

const getRandomNum = max => Math.floor(Math.random() * Math.floor(max));

const getGameSize = level => {
  switch (level) {
    case "easy":
      return 10;
    case "meduim":
      return 20;
    case "hard":
      return 30;
  }
};

const getColors = numberOfColors => {
  let colors = [];
  while (colors.length < numberOfColors) {
    let randomIndex = getRandomNum(15);
    let randomColor = colorBank[randomIndex];
    while (colors.includes(randomColor)) {
      randomIndex = getRandomNum(15);
      randomColor = colorBank[randomIndex];
    }
    colors.push(randomColor);
  }
  return colors;
};

const getPatterns = numberOfPatterns => {
  let pattrens = [];
  while (pattrens.length < numberOfPatterns) {
    let randomIndex = getRandomNum(15);
    let randomPattern = patternBank[randomIndex];
    while (pattrens.includes(randomPattern)) {
      randomIndex = getRandomNum(15);
      randomPattern = patternBank[randomIndex];
    }
    pattrens.push(randomPattern);
  }
  return pattrens;
};

const createGameCards = (colors, patterns) => {
  let gameCards = [];
  for (let index = 0; index < colors.length; index++) {
    const color = colors[index];
    const pattern = patterns[index];
    gameCards.push(
      { color, pattern, isOpen: false, isDone: false },
      { color, pattern, isOpen: false, isDone: false }
    ); // push couple of cards
  }
  gameCards.sort(() => Math.random() - 0.5); // shuffle gameCards array
  return gameCards;
};

export const createNewGame = gameLevel => {
  const gameize = getGameSize(gameLevel);
  const colors = getColors(gameize / 2);
  const patterns = getPatterns(gameize / 2);
  return createGameCards(colors, patterns);
};
