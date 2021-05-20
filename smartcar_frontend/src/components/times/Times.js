import React from "react";
import SpringDemo from "../animatedCar/SpringDemo";
import "./Times.css";

//const TimeList = "";

const Times = (props) => {
  // useEffect(() => {
  //   fetch(TimeList)
  //     .then((response) => response.json())
  //     .then((users) => setUsers(users))
  //     .catch((err) => console.error(err));
  // }, []);

  return (
    <div>
      <h2 className="times-heading">Leaderboard</h2>
      <ul className="times-ul">
        <li className="times-li">
          <span className="times-span">track</span>
          <span className="times-span">time</span>
        </li>
      </ul>
      <SpringDemo />
    </div>
  );
};

export default Times;
