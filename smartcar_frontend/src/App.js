import React from "react";
import { Route, BrowserRouter as Router, NavLink } from "react-router-dom";
import "./style/App.css";
import { Race } from "./components/race/Race";
import LeaderBoard from "./components/leaderboard/LeaderBoard";
import Home from "./pages/home/Home";
import Times from "./components/Times";
import SpringDemo from "./components/animatedCar/SpringDemo"

function App() {
  return (
    <>
      <SpringDemo />
    <div className="App">
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/race" component={Race} />
        <Route exact path="/leaderboard" component={LeaderBoard} />
        <Route exact path="/race_times" component={Times} />
      </Router>
    </div>
    <SpringDemo />
    </>
  );
}

export default App;
