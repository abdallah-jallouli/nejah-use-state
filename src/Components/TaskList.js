import React, { Component } from "react";
import TaskCard from "./TaskCard";

export default class TaskList extends Component {
  render() {
    // console.log(this.props)
    return (
      <div>
        {React.Children.toArray(
          this.props.list.map((el) => (
            <TaskCard
              task={el}
              deleteOne={this.props.deleteFunction}
              handleComplete={this.props.handleComplete}
            />
          ))
        )}
      </div>
    );
  }
}
