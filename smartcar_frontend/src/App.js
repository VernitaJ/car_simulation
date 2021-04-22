import React from "react";
import { Route, BrowserRouter as Router, NavLink } from "react-router-dom";
import "./App.css";
import { Race } from "./Components/Race";
import LeaderBoard from "./Components/LeaderBoard";
import Home from "./Components/Home";
import Times from "./Components/Times";
import Settings from "./Components/Settings";
import CameraTest from "./Components/camera/CameraTest"

function App() {
  return (
    <div className="App">
      <CameraTest />
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
