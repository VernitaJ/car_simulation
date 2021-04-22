import { ReactComponent, Component } from "react";
import React, { useState, useEffect } from "react";
import Joystick from "./Joystick";
import "./Race.css";

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
        <div className="race-screen">Stream will go here</div>
        <Joystick
          title="Static 1"
          width={250}
          height={250}
          options={{
            mode: "static",
            color: "green",
            position: { top: "80%", left: "50%" },
          }}
        />
      </div>
    );
  }
}

export { Race };
