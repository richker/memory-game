import React, { Component } from "react";
import { makeEnterGrid } from "../services/initGame";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class EntryView extends Component {
  handleChange = (level) => {
    this.props.selectLevel(level);
    window.location = "/game";
  };

  render() {
    const pics = makeEnterGrid();
    return (
      <div className="view">
        <div className="grid-wallpaper">
          {pics.map((pic) => {
            return (
              <div className="grid-wallpaper-card">
                <FontAwesomeIcon
                  color={pic.color}
                  size="sm"
                  icon={pic.pattern}
                />
              </div>
            );
          })}
        </div>
        <div className="enter-card">
          <div className="enter-card-body">
            <div>Memory Game</div>
            <div className="level-buttons">
              <div className="level-btn-container">
                <div
                  className="level-btn easy"
                  onClick={() => this.handleChange("easy")}
                >
                  E A S Y
                </div>
              </div>
              <div className="level-btn-container">
                <div
                  className="level-btn meduim"
                  onClick={() => this.handleChange("meduim")}
                >
                  M E D U I M
                </div>
              </div>
              <div className="level-btn-container">
                <div
                  className="level-btn hard"
                  onClick={() => this.handleChange("hard")}
                >
                  H A R D
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EntryView;
