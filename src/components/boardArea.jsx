import React, { Component } from "react";

class BoardArea extends Component {
  render() {
    const { level } = this.props;
    return (
      <div className="board-game">
        <Board level={level} />
      </div>
    );
  }
}

export default BoardArea;
