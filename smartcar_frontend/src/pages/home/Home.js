import React, { useEffect, useState } from "react";
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

const Home = (props) => {
  const [difficulty, setDifficulty] = useState(false);
  const [difficultyLevel, setDifficultyLevel] = useState("Easy");

  const handleDifficulty = (diffValue) => {
    setDifficultyLevel(diffValue);
    setDifficulty(false);
  };

  const onClick = () => {
    if (!difficulty) {
      setDifficulty(true);
    } else setDifficulty(false);
  };
  console.log(props.username);
  useEffect(() => {
    fetch(BACKEND_ROOT, {
      method: "PUT",
      body: JSON.stringify({
        laps: "1",
        difficulty: difficultyLevel,
        map: "Race Against The Machine",
        username: props.username,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((response) => response.json());
  }, [difficultyLevel]);

  return (
    <div>
      <header className="Home-header">
        <img src={logo} className="Home-logo" alt="logo" />
        <h1 className="Home-logo-text">SmartCar Shield</h1>
      </header>
      <h4 className="home-name-text">Welcome, {props.username}</h4>
      <div className="home-link">
        <NavLink
          className="active"
          to={{
            pathname: "/race",
            userProps: { username: props.username },
          }}
        >
          <div className="home-link-odd">Race</div>
        </NavLink>
        <NavLink
          className="active"
          to={{
            pathname: "/practice",
            userProps: { username: props.username },
          }}
        >
          <div className="home-link-even">Practice</div>
        </NavLink>
        <NavLink
          className="active"
          to={{
            pathname: "/monster",
            userProps: { username: props.username },
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
      <div className="difficulty" onClick={onClick}>
        {difficulty ? (
          <Difficulty onSelectDiff={handleDifficulty} />
        ) : (
          <div>Difficulty : {difficultyLevel}</div>
        )}
      </div>
      <SpringDemo />
    </div>
  );
};

export default Home;
