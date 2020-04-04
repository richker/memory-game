import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";

class GameCard extends Component {
  render() {
    const { index, card, onSelect } = this.props;
    const { color, pattern, isOpen } = card;
    return (
      <React.Fragment>
        {!isOpen ? (
          <div className="card card-closed" onClick={() => onSelect(index)}>
            <div className="card-body card-body-closed">
              <FontAwesomeIcon
                color="#cccccc"
                size="3x"
                icon={faQuestionCircle}
                style={{
                  border: "0.5px solid #000000",
                  borderRadius: "50%",
                  backgroundColor: "#000000"
                }}
              />
            </div>
          </div>
        ) : (
          <div className="card card-open" onClick={this.flipCard}>
            <div className="card-body">
              <FontAwesomeIcon color={color} size="4x" icon={pattern} />
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default GameCard;
