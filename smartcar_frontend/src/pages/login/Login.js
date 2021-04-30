import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../resources/logo.png";
import SpringDemo from "../../components/animatedCar/SpringDemo"
import "./Login.css"

class Login extends React.Component {
  state = { difficulty: false, difficultyLevel: "Easy" };

  handleDifficulty = (diffValue) => {
    this.setState({ difficultyLevel: diffValue });
    this.setState({ difficulty: false });
  };

  onClick = () => {
    if (!this.state.difficulty) {
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
        <form>
          <label></label>
          <div>
            <input id="inputfield" placeholder="username"></input>
          </div>
          <div>
            <button id="enter">Start</button>
          </div>
        </form>
            <SpringDemo />
      </div>
      
    )
  }
};

export default Login;