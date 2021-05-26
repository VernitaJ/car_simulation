import { React, Component } from "react";
import "./Race.css";
import Camera from "../camera/Camera";

const mqtt = require("mqtt");
const client = mqtt.connect("ws://localhost:8888");
const FORWARD = "/smartcar/control/throttle/forward";
const REVERSE = "/smartcar/control/throttle/reverse";
const LEFT = "/smartcar/control/steering/left";
const RIGHT = "/smartcar/control/steering/right";
const IDLE = 0
const STRAIGHT = 0
const VELOCITY = 100
const DIRECTION = 35

let up = false,
    right = false,
    down = false,
    left = false
class Race extends Component {

  componentDidMount()
  {
    document.addEventListener('keydown',this.keyPress) 
    document.addEventListener('keyup',this.keyRelease)
  }

  keyPress(e){
    
    if (e.keyCode === 38 /* up */ || e.keyCode === 87 /* w */ )
    {
      if(!up){
      up = true
      client.publish(FORWARD, VELOCITY.toString());
      console.log(e.keyCode)
      }
    }
    else if (e.keyCode === 39 /* right */ || e.keyCode === 68 /* d */)
    {
      if(!right){
        right = true
        client.publish(RIGHT, DIRECTION.toString());
      }
    }
    else if (e.keyCode === 40 /* back */ || e.keyCode === 83 /* s */){
      if(!down)
      {
        down = true
        client.publish(REVERSE, (-1*VELOCITY).toString());      
      }
    }
    else if (e.keyCode === 37 /* left */ || e.keyCode === 65 /* a */ ){
      if(!left){
        left = true
        client.publish(LEFT, (-1*DIRECTION).toString());
      }
    }
  }

  keyRelease(e){
    //console.log("Hello!")
    if (e.keyCode === 38 /* up */ || e.keyCode === 87 /* w */){
      up = false
      client.publish(FORWARD, IDLE.toString());
      console.log(e.keyCode)
    }
    else if (e.keyCode === 39 /* right */ || e.keyCode === 68 /* d */){
        right = false
        client.publish(RIGHT, STRAIGHT.toString());
    }
    else if (e.keyCode === 40 /* down */ || e.keyCode === 83 /* s */){
      down = false
      client.publish(REVERSE, IDLE.toString());
    }
    else if (e.keyCode === 37 /* left */ || e.keyCode === 65 /* a */){
      left = false
      client.publish(LEFT, STRAIGHT.toString())
    }
  }

  render() {
    return (
      <div >
        <div className="race-screen">
          <Camera />
        </div>
      </div>
    );
  }
}

export { Race };
