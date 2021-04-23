import { React, useState } from "react";
const mqtt = require("mqtt");
const client = mqtt.connect("ws://localhost:8888");
const topic = "/smartcar/camera";

client.subscribe(topic);


const CameraTest = () => {
  const [image, setImage] = useState("Placeholder");
    client.on("message", (topic, message) => {
    });


  return (
    <>
      <h1>{image}</h1>
      <canvas id="canvas" />
    </>
  );
};

export default CameraTest;
