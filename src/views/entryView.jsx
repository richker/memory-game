import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { makeEnterGrid } from "../services/initGame";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

class EntryView extends Component {
  state = {
    redirect: false,
    gameLevel: null,
  };

  handleLevel = (newValue) => {
    this.setState({ gameLevel: newValue, redirect: true });
  };

  render() {
    const { redirect, gameLevel } = this.state;
    if (redirect && gameLevel)
      return (
        <Redirect
          to={{
            pathname: "/game",
            state: { level: gameLevel },
          }}
        />
      );
    const pics = makeEnterGrid();
    return (
      <div className="view">
        <div className="grid-wallpaper">
          {pics.map((pic, key) => {
            return (
              <div key={key} className="grid-wallpaper-card">
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
            <div className="title-container">
              <div className="enter-title">MEMORY GAME</div>
            </div>
            <div className="level-buttons">
              <div className="level-btn-container">
                <div
                  className="level-btn easy"
                  onClick={() => this.handleLevel("easy")}
                >
                  E A S Y
                </div>
              </div>
              <div className="level-btn-container">
                <div
                  className="level-btn meduim"
                  onClick={() => this.handleLevel("meduim")}
                >
                  M E D I U M
                </div>
              </div>
              <div className="level-btn-container">
                <div
                  className="level-btn hard"
                  onClick={() => this.handleLevel("hard")}
                >
                  H A R D
                </div>
              </div>
            </div>
            <div className="enter-footer-container">
              <a
                className="contact-link"
                target="_blank"
                rel="noopener noreferrer"
                href="https://linkedin.com/in/matan-richker-20444a161"
                alt=""
              >
                <div className="contact-item">
                  <FontAwesomeIcon
                    size="lg"
                    style={{ paddingRight: 5 }}
                    color="#0e76a8"
                    icon={faLinkedin}
                  />
                  My Linkden
                </div>
              </a>
              <a
                className="contact-link"
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/richker"
                alt=""
              >
                <div className="contact-item">
                  <FontAwesomeIcon
                    style={{ paddingRight: 5 }}
                    size="lg"
                    icon={faGithub}
                  />
                  My Github
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EntryView;
