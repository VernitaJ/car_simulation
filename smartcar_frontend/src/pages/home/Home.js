import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../resources/logo.png";
import "./Home.css";
import SpringDemo from "../../components/animatedCar/SpringDemo";
import Difficulty from "../../components/difficulty/Difficulty";

const BACKEND_ROOT = "http://localhost:3002/godot";

const options = [
  { value: "Easy", label: "Easy" },
  { value: "Medium", label: "Medium" },
  { value: "Hard", label: "Hard" },
  { value: "BossMode", label: "BossMode" },
  { value: "Extreme", label: "Extreme" },
];

class HomeComponent extends React.Component {
  state = { difficulty: false, difficultyLevel: "Easy" };

  handleDifficulty = (diffValue) => {
    this.setState({ difficultyLevel: diffValue });
    this.setState({ difficulty: false });
    this.handleDifficultyBackend(diffValue);
  };

  onClick = () => {
    if (!this.state.difficulty) {
      this.setState({ difficulty: true });
    } else this.setState({ difficulty: false });
  };

  handleDifficultyBackend = (diffValue) => {
    fetch(BACKEND_ROOT, {
      method: "PUT",
      body: JSON.stringify({
        laps: "2",
        difficulty: diffValue,
        map: "Race Against The Machine",
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((response) => response.json());
  };
  render() {
    console.log(this.state.difficultyLevel);
    return (
      <div>
        <header className="Home-header">
          <img src={logo} className="Home-logo" alt="logo" />
          <h1 className="Home-logo-text">SmartCar Shield</h1>
        </header>
        <h4 className="home-name-text">Welcome, {this.props.username}</h4>
        <div className="home-link">
          <NavLink
            className="active"
            to={{
              pathname: "/race",
              userProps: { username: this.props.username },
            }}
          >
            <div className="home-link-odd">Race</div>
          </NavLink>
          <NavLink
            className="active"
            to={{
              pathname: "/practice",
              userProps: { username: this.props.username },
            }}
          >
            <div className="home-link-even">Practice</div>
          </NavLink>
          <NavLink
            className="active"
            to={{
              pathname: "/monster",
              userProps: { username: this.props.username },
            }}
          >
            <div className="home-link-odd">Monster Run</div>
          </NavLink>
          <NavLink className="active" to="/LeaderBoard">
            <div className="home-link-even">Leaderboard</div>
          </NavLink>
          <NavLink className="active" to="/race_times">
            <div className="home-link-odd">Race times</div>
          </NavLink>
        </div>
        <div className="difficulty" onClick={this.onClick}>
          {this.state.difficulty ? (
            <Difficulty onSelectDiff={this.handleDifficulty} />
          ) : (
            <div>Difficulty : {this.state.difficultyLevel}</div>
          )}
        </div>
        <SpringDemo />
      </div>
    );
  }
}

export default HomeComponent;
