import { ReactComponent, Component } from "react";
import React, { useState, useEffect } from "react";
import "./Race.css";
import Camera from "../camera/Camera"
import Controller from "./Controller";

class Race extends Component {
  connectHandler(gamepadIndex) {
    console.log(`Gamepad ${gamepadIndex} connected !`);
  }

  disconnectHandler(gamepadIndex) {
    console.log(`Gamepad ${gamepadIndex} disconnected !`);
  }

  buttonChangeHandler(buttonName, down) {
    console.log(buttonName, down);
  }

  axisChangeHandler(axisName, value, previousValue) {
    console.log(axisName, value);
  }

  buttonDownHandler(buttonName) {
    console.log(buttonName, "down");
  }

  buttonUpHandler(buttonName) {
    console.log(buttonName, "up");
  }

  render() {
    return (
      <div>
        <div className="race-screen">
          <Camera/>
        </div>
        <Controller/>
      </div>
    );
  }
}

export { Race };
