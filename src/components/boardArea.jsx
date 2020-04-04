import React, { Component } from "react";
import GameBoard from "./gameBoard";

class BoardArea extends Component {
  render() {
    const { level } = this.props;
    return (
      <React.Fragment>
        <GameBoard level={level} updatePoints={this.props.updatePoints} />
      </React.Fragment>
    );
  }
}

export default BoardArea;
