import React from "react";

const mqtt = require("mqtt");
const client = mqtt.connect("ws://localhost:8888");
const topic = "/smartcar/camera";
client.subscribe(topic);

const Camera = () => {
  const WIDTH = 320;
  const HEIGHT = 240;
  client.on("message", (topic, message) => {
    const ctx = document.getElementById("canvas").getContext("2d");
    const arrayBuffer = new ArrayBuffer(WIDTH * HEIGHT * 4);
    const pixels = new Uint8ClampedArray(arrayBuffer);
    for (let y = 0; y < HEIGHT; y += 4) {
      for (let x = 0; x < WIDTH; x += 4) {
        const i = y * WIDTH + x;
        pixels[i] = message[3 * i];         // red
        pixels[i + 1] = message[3 * i + 1]; // green
        pixels[i + 2] = message[3 * i + 2]; // blue
        pixels[i + 3] = 255;                // alpha
      }
    }
    const imageData = new ImageData(pixels, WIDTH, HEIGHT);
    ctx.putImageData(imageData, 0, 0);
  });
  return <canvas id = "canvas" />;
};

export default Camera;
