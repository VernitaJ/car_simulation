import React from "react";
import { subscribe } from "mqtt-react";

const sendMessage = (props) => () =>
  props.mqtt.publish("@demo/topic", "Hello World");

const SendMessageButton = (props) => (
  <button onClick={sendMessage(props)}>Send Message</button>
);

export default subscribe({ topic: "@demo/topic" })(SendMessageButton);

// import { subscribe } from 'react-mqtt-client'

// const MessageList = props => {
//     const { mqtt } = props
//     return (
//         <React.Fragment>
//             {props.data.reverse().map((d, i) => (
//                 <p>{`${JSON.stringify(d, null, 4)}`}</p>
//             ))}
//         </React.Fragment>
//     )
// }

// const Connected = subscribe({ topic: '#' })(MessageList)
