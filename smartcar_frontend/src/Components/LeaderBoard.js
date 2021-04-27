import React, { useState, useEffect } from "react";
import "./LeaderBoard.css";

//const LeaderBoardList = "";

const LeaderBoard = () => {
  const [user1, setuser1] = useState("user")

  return (
    <div>
      <h2 className="leaderboard-heading">Leaderboard</h2>
      <ul>
        <li>
          <span class="number">1 </span>
          <span class="name" onClick={()=>setuser1("it changed")}>{user1} </span>
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
    </div>
  );
};

export default LeaderBoard;
