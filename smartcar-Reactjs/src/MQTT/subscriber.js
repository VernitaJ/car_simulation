import { subscribe } from "react-mqtt-client";

const MessageList = (props) => {
  const { mqtt } = props;
  return (
    <React.Fragment>
      {props.data.reverse().map((d, i) => (
        <p>{`${JSON.stringify(d, null, 4)}`}</p>
      ))}
    </React.Fragment>
  );
};

const Connected = subscribe({ topic: "#" })(MessageList);
