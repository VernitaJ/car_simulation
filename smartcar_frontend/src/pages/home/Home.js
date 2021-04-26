import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../resources/logo.png";
import "./Home.css";
import Difficulty from "../../components/difficulty/Difficulty";

class HomeComponent extends React.Component {
  state = { difficulty: false, difficultyLevel: "Easy" };

  handleDifficulty = (diffValue) => {
    this.setState({ difficultyLevel: diffValue });
    this.setState({ difficulty: false });
  };

  onClick = () => {
    if (!this.state.difficulty) {
      console.log("true");
      this.setState({ difficulty: true });
    } else this.setState({ difficulty: false });
  };

  render() {
    return (
      <div>
        <header className="Home-header">
          <img src={logo} className="Home-logo" alt="logo" />
          <h1 className="Home-logo-text">SmartCar Shield</h1>
        </header>
        <ul className="Home-link">
          <li className="Home-linkItem">
            <NavLink className="active" to="/race">
              Race
            </NavLink>
          </li>
          <li className="Home-linkItem">
            <NavLink className="active" to="/leaderboard">
              LeaderBoard
            </NavLink>
          </li>
          <li className="Home-linkItem">
            <NavLink className="active" to="/race_times">
              Race Times
            </NavLink>
          </li>
          <li className="Home-linkItem" onClick={this.onClick}>
            Difficulty : {this.state.difficultyLevel}
            {this.state.difficulty ? (
              <Difficulty onSelectDiff={this.handleDifficulty} />
            ) : null}
          </li>
        </ul>
      </div>
    );
  }
}

export default HomeComponent;
