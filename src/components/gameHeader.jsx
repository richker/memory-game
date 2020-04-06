import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUndo, faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons";

const GameHeader = ({ points, onNew, onBack }) => {
  return (
    <div className="game-header">
      <div className="points-container">
        <span className="points-label">POINTS </span>
        <span className="points-label">{points}</span>
        <span className="faded-points-change">+3</span>
      </div>
      <div className="buttons-container">
        <span className="icon-btn" onClick={onBack}>
          <FontAwesomeIcon size="lg" icon={faLongArrowAltLeft} />
        </span>
        <span className="icon-btn" onClick={onNew}>
          <FontAwesomeIcon size="lg" icon={faUndo} />
        </span>
      </div>
    </div>
  );
};

export default GameHeader;
