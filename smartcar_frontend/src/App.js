import React from "react";
import { Route, BrowserRouter as Router, NavLink } from "react-router-dom";
import "./style/App.css";
import { Race } from "./components/Race";
import LeaderBoard from "./components/LeaderBoard";
import Home from "./components/Home";
import Times from "./components/Times";
import Settings from "./components/Settings";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/race" component={Race} />
        <Route exact path="/leaderboard" component={LeaderBoard} />
        <Route exact path="/race_times" component={Times} />
        <Route exact path="/settings" component={Settings} />
      </Router>
    </div>
  );
}

export default App;
