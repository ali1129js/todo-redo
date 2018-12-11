/**
 * @Author: Ali
 * @Date:   2018-11-12T06:40:05+01:00
 * @Last modified by:   Ali
 * @Last modified time: 2018-11-23T11:04:39+01:00
 */
import React, { Component } from 'react'

class Form extends Component {
constructor(){
  super()
  this.state = {
    newTask:{}
  }
  // Create another with callback instead of createRef!
this.inputRef=React.createRef()
this.handleSubmit = this.handleSubmit.bind(this)
}
handleSubmit(e){
  e.preventDefault()
  // need to know {.current.value} ????
  console.log(this.inputRef.current.value)
  //setState(nextState, callback) or setState(updater[, callback])
  this.setState({
    newTask: this.inputRef.current.value
  },() => {
    this.props.Form(this.state.newTask)
  })
}
componentDidMount(){
  this.inputRef.current.focus()
}
render(){
  return(
    <div>
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Enter new task"
          ref={this.inputRef} />
        <button type='submit'>Add Task</button>
      </form>
    </div>
  )
}
}
export default Form
