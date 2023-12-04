import React, { Component } from "react";

export default class AddNewTask extends Component {
  state = {
    newText: "Bessam ",
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: Math.random(),
      action: this.state.newText,
      isDone: false,
    };
    this.state.newText.length === 0 &&
      alert("bara a3mil 7aja tisla7 khirlik -_-");
    (this.state.newText.length <= 8 && this.state.newText.length)
      ? this.props.handleAdd(newTask)
      : alert("matktibch 7aja itfout il 8 chars");
    this.setState({ newText: "" });
  };
  render() {
    return (
      <div>
        <h1>Our Todo List</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.newText}
            onChange={(e) => this.setState({ newText: e.target.value })}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}
