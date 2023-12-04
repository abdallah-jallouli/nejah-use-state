import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import React, { Component } from "react";
import TaskList from "./Components/TaskList";
import AddNewTask from "./Components/AddNewTask";

export default class App extends Component {
  state = {
    todos: [
      { id: Math.random(), action: "Wake Up ", isDone: true },
      { id: Math.random(), action: "Go Out ", isDone: false },
    ],
    count: 0,
  };
  handleDelete = (THEID) =>
    this.setState({ todos: this.state.todos.filter((el) => el.id !== THEID) });
  handleComplete = (ID) =>
    this.setState({
      todos: this.state.todos.map((el) =>
        el.id === ID ? { ...el, isDone: !el.isDone } : el
      ),
    });
    handleAdd=(newMission)=>this.setState({todos:[...this.state.todos,newMission]})
  render() {
    return (
      <div className="App">
        <AddNewTask  handleAdd={this.handleAdd} />
        <TaskList
          list={this.state.todos}
          deleteFunction={this.handleDelete}
          handleComplete={this.handleComplete}
        />
      </div>
    );
  }
}
