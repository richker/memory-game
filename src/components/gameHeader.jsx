import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUndo, faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons";

const GameHeader = ({ points }) => {
  return (
    <div className="game-header">
      <div className="points-container">
        <span className="points-label">POINTS </span>
        <span className="points-label">{points}</span>
      </div>
      <div className="buttons-container">
        <div className="icon-btn">
          <FontAwesomeIcon size="lg" icon={faLongArrowAltLeft} />
        </div>
        <div className="icon-btn">
          <FontAwesomeIcon size="lg" icon={faUndo} />
        </div>
      </div>
    </div>
  );
};

export default GameHeader;
