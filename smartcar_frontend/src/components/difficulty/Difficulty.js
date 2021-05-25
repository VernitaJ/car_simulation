import React from "react";

export class Difficulty extends React.Component {
  handleSelectionChanged = (e) => {
    this.props.onSelectDiff(e.target.value);
  };

  render() {
    return (
      <div>
        <button
          className="difficulty-button"
          value="Easy"
          onClick={this.handleSelectionChanged}
        >
          Easy
        </button>
        <button
          className="difficulty-button"
          value="Medium"
          onClick={this.handleSelectionChanged}
        >
          Medium
        </button>
        <button
          className="difficulty-button"
          value="Hard"
          onClick={this.handleSelectionChanged}
        >
          Hard
        </button>
        <button
          className="difficulty-button"
          value="BossMode"
          onClick={this.handleSelectionChanged}
        >
          BossMode
        </button>
        <button
          className="difficulty-button"
          value="Extreme"
          onClick={this.handleSelectionChanged}
        >
          Extreme
        </button>
      </div>
    );
  }
}

export default Difficulty;
