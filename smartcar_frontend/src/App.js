import React, {useState} from "react";
import { Route, BrowserRouter as Router} from "react-router-dom";
import "./style/App.css";
import { Race } from "./components/race/Race";
import LeaderBoard from "./components/leaderboard/LeaderBoard";
import Home from "./pages/home/Home";
import Times from "./components/Times";
import Login from "./pages/login/Login";

function App() {
  const [login, setlogin]= useState(false)
  return (
    <>
    <div className="App">
      <Router>
        <Route exact path="/" component={login? Home: Login} />
        <Route exact path="/race" component={Race} />
        <Route exact path="/leaderboard" component={LeaderBoard} />
        <Route exact path="/race_times" component={Times} />
      </Router>
    </div>
    </>
  );
}

export default App;
