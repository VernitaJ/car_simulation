import React from "react";
import SpringDemo from "../animatedCar/SpringDemo";
import "./Times.css";

//const TimeList = "";

const Times = (props) => {
  return (
    <div>
      <h2 className="times-heading">Times</h2>
      <ul className="times-ul">
        <div className="times-columns">
          <div className="times-column-text">Rank</div>
          <div className="times-column-text">Course</div>
          <div className="times-column-text">Time</div>
        </div>
        {props.users.map((user) => (
          <li className="times-li">
            <div className="times-span">{user.placement}</div>
            <div className="times-span">{user.course}</div>
            <div className="times-span">{user.time}</div>
          </li>
        ))}
      </ul>
      <SpringDemo />
    </div>
  );
};

export default Times;
