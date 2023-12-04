import React, { Component } from 'react'

export default class TaskCard extends Component {
  render() {
    // console.log(this.props.task)
    return (
      <div  className={this.props.task.isDone?"done":"undone"} >
        <h1>{this.props.task.action}</h1>
        <button onClick={()=>this.props.deleteOne(this.props.task.id)} >Delete</button>
        <button onClick={()=>this.props.handleComplete(this.props.task.id)} >{this.props.task.isDone?"Undo":"Complete"}</button>
        <hr />
      </div>
    )
  }
}
