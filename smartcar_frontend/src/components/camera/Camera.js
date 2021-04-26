import React from "react";

const mqtt = require("mqtt");
const client = mqtt.connect("ws://localhost:8888");
const topic = "/smartcar/camera";
client.subscribe(topic);

const Camera = () => {
  client.on("message", (topic, message) => {
    const ctx = document.getElementById("canvas").getContext("2d");
    //const canvas = document.getElementById("canvas")

    const WIDTH = 320;
    const HEIGHT = 240;
    const arrayBuffer = new ArrayBuffer(WIDTH * HEIGHT * 4);
    const pixels = new Uint8ClampedArray(arrayBuffer);
    const payload = message;
    for (let y = 0; y < HEIGHT; y += 4) {
      for (let x = 0; x < WIDTH; x += 4) {
        const i = y * WIDTH + x;
        let r = (pixels[i] = payload[3 * i]); // red
        let g = (pixels[i + 1] = payload[3 * i + 1]); // green
        let b = (pixels[i + 2] = payload[3 * i + 2]); // blue
        let a = (pixels[i + 3] = 255);
      }
    }
    // }
    const imageData = new ImageData(pixels, WIDTH, HEIGHT);
    //ctx.imageSmoothingEnabled = false;
    ctx.putImageData(imageData, 0, 0);
    //ctx.scale(2,2)
    //ctx.drawImage(imageData, 0, 0, WIDTH*2, HEIGHT*2)
  });
  return <canvas id="canvas" />;
};

export default Camera;

// WE SHOULD MAKE IT LIKE THIS TO PLAY NICER WITH REACT

//   const draw = (ctx, frameCount) => {
//     ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
//     ctx.fillStyle = "#000000";
//     ctx.beginPath();
//     ctx.arc(50, 100, 20 * Math.sin(frameCount * 0.05) ** 2, 0, 2 * Math.PI);
//     ctx.fill();
//   };

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const context = canvas.getContext("2d");
//     let frameCount = 0;
//     let animationFrameId;

//     //Our draw came here
//     const render = () => {
//       frameCount++;
//       draw(context, frameCount);
//       animationFrameId = window.requestAnimationFrame(render);
//     };
//     render();

//     return () => {
//       window.cancelAnimationFrame(animationFrameId);
//     };
//   }, [draw]);
