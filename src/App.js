import React from "react";
import "./App.css";
import BoardArea from "./components/boardArea";
import GameView from "./views/gameView";

function App() {
  return (
    <div className="App">
      <GameView level="meduim" />
    </div>
  );
}

export default App;
