import React, { useState, useEffect } from "react";
import { Route, BrowserRouter as Router, NavLink } from "react-router-dom";
import "./style/App.css";
import { Race } from "./components/race/Race";
import LeaderBoard from "./components/leaderboard/LeaderBoard";
import Home from "./pages/home/Home";
import Times from "./components/Times";

const BACKEND_ROOT = "http://localhost:3002/";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    console.log("hey");
    fetch(BACKEND_ROOT)
      .then((response) => response.json(users))
      .then((users) => setUsers(users))
      .catch((err) => console.error(err));
    console.log(users);
  }, []);

  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/race" component={Race} />
        <Route
          exact
          path="/leaderboard"
          component={() => <LeaderBoard users={users} />}
        />
        <Route exact path="/race_times" component={Times} />
      </Router>
    </div>
  );
}

export default App;
