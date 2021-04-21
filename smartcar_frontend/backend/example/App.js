import { React, useState } from 'react'

const mqtt = require("mqtt")
const client  = mqtt.connect("ws://localhost:8888")
const topic = "test"
const message = "hello world"
client.subscribe(topic)

const App = () => {

  client.on("message", (topic, message) => {
    message = message.toString()
    setMsg(message)
    console.log(message)
  })

  const [msg, setMsg] = useState("not sent")

  return (
    <div className="App">
      <button onClick={() => client.publish(topic, message)}>
         click me
      </button>
      <h1>the message is: {msg}</h1>
    </div>
  );
}

export default App;
