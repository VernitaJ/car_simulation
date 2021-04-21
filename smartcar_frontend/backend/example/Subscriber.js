const mqtt = require("mqtt")
const client  = mqtt.connect("mqtt://localhost:1883")
const topic = "/smartcar/camera"
client.subscribe(topic)

client.on("message", (topic, message) => {
    message = message.toString()
    console.log(message)
})