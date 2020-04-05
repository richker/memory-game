import React from "react";
import GameView from "./views/gameView";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <GameView level="hard" />
    </div>
  );
}

export default App;
