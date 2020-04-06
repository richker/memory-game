import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";

class GameCard extends Component {
  render() {
    const { index, card, onSelect } = this.props;
    const { color, pattern, isOpen } = card;
    return (
      <div
        className={"card" + (isOpen ? " flipped" : "")}
        onClick={() => onSelect(index)}
      >
        <div className="front">
          <div className="card-body">
            <div className="front-body">
              <FontAwesomeIcon
                color="#cccccc"
                size="3x"
                icon={faQuestionCircle}
                style={{
                  border: "0.5px solid #000000",
                  borderRadius: "50%",
                  backgroundColor: "#000000",
                }}
              />
            </div>
          </div>
        </div>

        <div className="back" onClick={this.flipCard}>
          <div className="card-body">
            <FontAwesomeIcon color={color} size="4x" icon={pattern} />
          </div>
        </div>
      </div>
    );
  }
}

export default GameCard;
