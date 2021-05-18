import React from "react";
import SpringDemo from "./animatedCar/SpringDemo";

const Times = (props) => {
  return (
    <div>
      <h2 className="times-heading">Times</h2>
      <ul>
        {props.users.map((user) => (
          <li>
            <span className="course">{user.username}</span>
            <span className="times">{user.time}</span>
            <span className="times">{user.course}</span>
          </li>
        ))}
      </ul>
      <SpringDemo />
    </div>
  );
};

export default Times;
