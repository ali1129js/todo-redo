/**
 * @Author: Ali
 * @Date:   2018-11-12T06:40:05+01:00
 * @Last modified by:   Ali
 * @Last modified time: 2018-11-16T07:40:15+01:00
 */
import React, { Component } from 'react'

class Form extends Component {
constructor(){
  super()
this.inputRef=React.createRef()
this.handleSubmit = this.handleSubmit.bind(this)
}

handleSubmit(e){
  e.preventDefault()
  console.log(this.inputRef.current.value)
}
componentDidMount(){
  this.inputRef.current.focus()
}
render(){
  return(
    <form onSubmit={this.handleSubmit}>
      <input
        type="text"
        placeholder="Enter new task"
        ref={this.inputRef} />
    <button type='submit'>Add Task</button>
    </form>
  )
}
}
export default Form
