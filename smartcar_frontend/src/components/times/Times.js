import React from "react";
import SpringDemo from "../animatedCar/SpringDemo";
import "../times/Times.css";

const Times = (props) => {
  return (
    <div>
      <h2 className="times-heading">Times</h2>
      <div className="times-columns">
        <p className="times-column">Username</p>
        <p className="times-column">Time</p>
        <p className="times-column">Course</p>
      </div>
      <ul>
        {props.users.map((user) => (
          <li key={user.raceid}>
            <div className="course">{user.username}</div>
            <div className="times">{user.time}</div>
            <div className="times">{user.course}</div>
          </li>
        ))}
      </ul>
      <SpringDemo />
    </div>
  );
};

export default Times;
