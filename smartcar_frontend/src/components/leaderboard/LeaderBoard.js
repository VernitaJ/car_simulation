import React from "react";
import "../../pages/home/Home.css";

const LeaderBoard = (props) => {
  let placement = 1;
  return (
    <div>
      <h2 className="leaderboard-heading">Leaderboard</h2>
      <div className="leaderboard-grid">
        {props.users.map((user) => (
          <div className="leaderboard-row">
            <h3 className="leaderboard-entry">{placement++}</h3>
            <h4 className="leaderboard-entry">{user.username}</h4>
            <h3 className="leaderboard-entry">{user.time}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeaderBoard;
