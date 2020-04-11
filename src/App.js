import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import GameView from "./views/gameView";
import EntryView from "./views/entryView";
import "./assets/scss/style.scss";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/game" component={GameView} />
          <Route path="/enter" component={EntryView} />
          <Redirect from="/" exact to="/enter" />
          <Redirect to="/enter" />
        </Switch>
      </div>
    );
  }
}

export default App;
