import React from "react";
import "./LeaderBoard.css";

const LeaderBoard = (props) => {
  let placement = 1;
  return (
    <div>
      <h2 className="leaderboard-heading">Leaderboard</h2>
      <ul>
        {props.users.map((user) => (
          <li className="leaderboard-row">
            <h3 className="leaderboard-entry">{placement++}</h3>
            <h4 className="leaderboard-entry">{user.username}</h4>
            <h3 className="leaderboard-entry">{user.time}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeaderBoard;
