import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../resources/logo.png";
import "./Home.css";
import Select from "react-select";
import SpringDemo from "../../components/animatedCar/SpringDemo";

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
    this.handleDifficultyBackend(diffValue.value);
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
    return (
      <div>
        <header className="Home-header">
          <img src={logo} className="Home-logo" alt="logo" />
          <h1 className="Home-logo-text">SmartCar Shield</h1>
        </header>
        <h4 className="home-name-text">Welcome, {this.props.username}</h4>
        <NavLink
          className="active"
          to={{
            pathname: "/race",
            userProps: { username: this.props.username },
          }}
        >
          <div className="Home-link">
            <li className="Home-linkItem">Race</li>
          </div>
        </NavLink>
        <NavLink className="active" to="/LeaderBoard">
          <div className="Home-link">
            <li className="Home-linkItem">Leaderboard</li>
          </div>
        </NavLink>
        <NavLink className="active" to="/race_times">
          <div className="Home-link">
            <li className="Home-linkItem">Race times</li>
          </div>
        </NavLink>
        <div className="DifficultyList">
          <Select
            placeholder="Difficulty"
            options={options}
            className="difficult_options"
            onChange={this.handleDifficulty}
          />
        </div>
        <SpringDemo />
      </div>
    );
  }
}

export default HomeComponent;
