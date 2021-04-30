import React from "react";
import "./LeaderBoard.css";
import SpringDemo from "../../components/animatedCar/SpringDemo"

//const LeaderBoardList = "";

const LeaderBoard = () => {

  return (
    <div>
      <h2 className="leaderboard-heading">Leaderboard</h2>
      <ul>
        <li>
          <span class="number">1 </span>
          <span class="name">user </span>
          <span class="time">time </span>
        </li>
        <li>
          <span class="number">2 </span>
          <span class="name">user </span>
          <span class="time">time </span>
        </li>
        <li>
          <span class="number">3 </span>
          <span class="name">user </span>
          <span class="time">time </span>
        </li>
        <li>
          <span class="number">4 </span>
          <span class="name">user </span>
          <span class="time">time </span>
        </li>
        <li>
          <span class="number">5 </span>
          <span class="name">user </span>
          <span class="time">time </span>
        </li>
        <li>
          <span class="number">6 </span>
          <span class="name">user </span>
          <span class="time">time </span>
        </li>
      </ul>
      <SpringDemo />
    </div>
    
  );
};

export default LeaderBoard;
