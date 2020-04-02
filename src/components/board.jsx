import React, {Component} from 'react';
import Card from "./card"

class Board extends Component {
    render() {
      return (
          <div className="board-game">
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              {/* <Card /> */}
              {/* <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card /> */}
          </div>
      );
    }
  }

  export default Board;