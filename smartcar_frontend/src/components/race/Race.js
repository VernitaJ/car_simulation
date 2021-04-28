import { React, Component } from "react";
import Joystick from "./Joystick";
import "./Race.css";
import Camera from "../camera/Camera";

class Race extends Component {
  render() {
    return (
      <div>
        <div className="race-screen">Stream will go here</div>
        <Joystick
          className="joystick"
          title="joystick"
          width={250}
          height={250}
          options={{
            mode: "static",
            color: "green",
            position: { top: "70%", left: "50%" },
          }}
        />
      </div>
    );
  }
}

export { Race };
