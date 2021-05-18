import React from "react";
import "./LeaderBoard.css";

const LeaderBoard = (props) => {
  let placement = 1;
  return (
    <div>
      <h2 className="leaderboard-heading">Leaderboard</h2>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Username</th>
            <th>Time</th>
            <th>Course</th>
          </tr>
        </thead>
        {props.users.map((user) => (
          <tr key={user.raceid}>
            <td>#{placement++}</td>
            <td className="course">{user.username}</td>
            <td className="times">{user.time}</td>
            <td className="leaderboard-entry">{user.course}</td>
          </tr>
        ))}
      </table>
      <div className="times-columns">
        <p className="times-column">Username</p>
        <p className="times-column">Time</p>
        <p className="times-column">Course</p>
      </div>
      <ul>
        {props.users.map((user) => (
          <li className="leaderboard-row" key={user.raceid}>
            <div>#{placement++}</div>
            <div className="course">{user.username}</div>
            <div className="times">{user.time}</div>
            <div className="leaderboard-entry">{user.course}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeaderBoard;
