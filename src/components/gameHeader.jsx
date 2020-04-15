import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUndo, faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons";

class GameHeader extends Component {
  state = {
    isChange: "fade-out",
    changePoints: null,
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.points !== this.props.points) {
      if (prevProps.points < this.props.points) {
        const change = this.props.points - prevProps.points;
        this.setState({
          isChange: "fade-in success",
          changePoints: `+${change}`,
        });
      } else {
        this.setState({ isChange: "fade-in fault", changePoints: "-1" });
      }

      setTimeout(() => {
        this.setState({ isChange: "fade-out" });
      }, 950);
    }
  }

  render() {
    const { points, onNew, onBack } = this.props;
    const { isChange, changePoints } = this.state;
    return (
      <div className="game-header">
        <div className="points-container">
          <span className="points-label">POINTS </span>
          <span className="points-label">{points}</span>
          <span className={`changePoints ${isChange}`}>{changePoints}</span>
        </div>
        <div className="buttons-container">
          <span className="icon-btn" onClick={onNew}>
            <FontAwesomeIcon icon={faUndo} />
          </span>
          <span className="icon-btn" onClick={onBack}>
            <FontAwesomeIcon icon={faLongArrowAltLeft} />
          </span>
        </div>
      </div>
    );
  }
}

export default GameHeader;
