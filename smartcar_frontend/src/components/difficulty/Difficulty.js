import React from "react";

export class Difficulty extends React.Component {
  state = {
    dropDownSelection: "Easy",
  };

  handleSelectionChanged = (e) => {
    this.props.onSelectDiff(e.target.value);
  };

  render() {
    return (
      <div className="difficulty-button-container">
        <button
          className="difficulty-button"
          value="Easy"
          onClick={this.handleSelectionChanged}
        >
          Easy
        </button>
        <button
          className="difficulty-button"
          value="Amateur"
          onClick={this.handleSelectionChanged}
        >
          Amateur
        </button>
        <button
          className="difficulty-button"
          value="BossMode"
          onClick={this.handleSelectionChanged}
        >
          BossMode
        </button>
      </div>
    );
  }
}

export default Difficulty;
