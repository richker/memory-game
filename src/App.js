import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import GameView from "./views/gameView";
import EntryView from "./views/entryView";
import "./App.scss";

class App extends Component {
  state = {
    gameLevel: null,
  };

  handleLevel = (newValue) => {
    console.log("newValue", newValue);
    this.setState({ gameLevel: newValue });
  };

  render() {
    const { gameLevel } = this.state;
    console.log("gameLevel", gameLevel);
    return (
      <div className="App">
        <Switch>
          <Route path="/game" render={() => <GameView level={gameLevel} />} />
          <Route
            path="/enter"
            render={() => <EntryView selectLevel={this.handleLevel} />}
          />
          <Redirect from="/" exact to="/enter" />
          <Redirect to="/enter" />
        </Switch>
      </div>
    );
  }
}

export default App;
