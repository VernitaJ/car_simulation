import React from "react";
import KeyboardEventHandler from "react-keyboard-event-handler";
import "./Race.css";

const Controller = (props) => {
  var rightPressed = false;
  var leftPressed = false;
  var upPressed = false;
  var downPressed = false;

  return (
    <div>
      <KeyboardEventHandler
        handleKeys={["37", "38", "39", "40"]}
        onKeyEvent={(key, e) =>
          console.log(`do something upon keydown event of ${key}`)
        }
      >
        <div className="controller-buttons">
          <button className="controller-up">Up</button>
          <button className="controller-left">Left</button>
          <button className="controller-right">Right</button>
          <button className="controller-down">Down</button>
        </div>
      </KeyboardEventHandler>
    </div>
  );
};

export default Controller;
