import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Race.css";
import ReactNipple from "react-nipple";
import DebugView from "react-nipple/lib/DebugView";

const mqtt = require("mqtt");
const client = mqtt.connect("ws://localhost:8888");
const topic = "test";
const message = "helo";
client.subscribe(topic);

export default class JoyStick extends Component {
  static propTypes = {
    title: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    options: PropTypes.object,
  };
  state = {
    data: undefined,
    velocity: 0,
    steering: 0,
  };

  delay = (ms) => {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  };

  handleJoystickStart = (evt, data) => {
    this.setState({ data });
  };
  handleJoystickEnd = (evt, data) => {
    this.setState({ data });
  };

  handleJoystickMove = (evt, data) => {
    this.setState({ data });
    this.delay(5000);
    if (this.velocity < 90 && data.direction.y === "up") {
      this.setState({ velocity: this.velocity + 10 });
      client.publish("/smartcar/control/throttle/forward", this.velocity);
    } else if (this.velocity > -90 && data.direction.y === "down") {
      this.setState({ velocity: this.velocity - 10 });
      client.publish("/smartcar/control/throttle/reverse", this.velocity);
    }
  };

  handleJoystickDir = (evt, data) => {
    this.setState({ data });
  };
  handleJoystickPlain = (evt, data) => {
    this.setState({ data });
    // client.publish(topic, data);
  };
  handleJoystickShown = (evt, data) => {
    this.setState({ data });
  };
  handleJoystickHidden = (evt, data) => {
    this.setState({ data });
  };
  handleJoystickPressure = (evt, data) => {
    this.setState({ data });
  };

  render() {
    // client.on("message", (topic, message) => {
    //   message = message.toString();
    // });

    return (
      <div className="NippleExample">
        <ReactNipple
          className="joystick"
          options={this.props.options}
          style={{
            width: this.props.width,
            height: this.props.height,
          }}
          onStart={this.handleJoystickStart}
          onEnd={this.handleJoystickEnd}
          onMove={this.handleJoystickMove}
          onDir={this.handleJoystickDir}
          onPlain={this.handleJoystickPlain}
          onShown={this.handleJoystickShown}
          onHidden={this.handleJoystickHidden}
          onPressure={this.handleJoystickPressure}
        />
        <DebugView data={this.state.data} />
      </div>
    );
  }
}
