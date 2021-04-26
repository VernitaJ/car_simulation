import React from "react";
import { Route, BrowserRouter as Router, NavLink } from "react-router-dom";
import "./App.css";
import { Race } from "./Components/Racing/Race";
import LeaderBoard from "./Components/LeaderBoard";
import Home from "./Components/Home/Home";
import Times from "./Components/Times";
import DifficultyOption from "./Components/Home/DifficultyOption";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/race" component={Race} />
        <Route exact path="/leaderboard" component={LeaderBoard} />
        <Route exact path="/race_times" component={Times} />
        <Route exact path="/settings" component={DifficultyOption} />
      </Router>
    </div>
  );
}

export default App;
