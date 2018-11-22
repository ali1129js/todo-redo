/**
 * @Author: Ali
 * @Date:   2018-10-26T11:54:42+02:00
 * @Last modified by:   Ali
 * @Last modified time: 2018-11-22T06:54:11+01:00
 */
import React, { Component } from 'react'
import Form from './Components/Form'
import TodoItems from './Components/TodoItems'
class App extends Component {
  constructor(){
    super()
    this.state = {
      message:"Hello there",
      newTodo:'', // Holds what the user types in the input Box
      todos:[
        {
        title: "Learn react",
        done: false
      } ,
      {
        title: " learn jsx",
        done: false
      }
       ]
    }
  }
  formSubmitted(e){
    e.preventDefault()
    console.log(this.state.newTodo)
  }
  newTodoChanged(e){
    console.log(e.target.value);
      /*
    The e is the argument of an event handler you attach to a certain event on a certain component... in this case the newTodoChanged event. Events are objects with certain properties, and e.target almost always represents a DOM element.

    Thus e.target.value is the value property of some DOM element, in this case that means the text entered in the input box.
    */
    this.setState({
      newTodo: e.target.value
    })
  }
  render(){
      return (
        <div>
          {this.state.message}
          <form onSubmit={this.formSubmitted.bind(this)}>
            <input
              type="text"
              onChange={(e) => this.newTodoChanged(e)}
            />
            <button type="submit"> Add Todo </button>
          </form>



          <br />
          <br />
          <br />
          <Form />
          <TodoItems />
        </div>
      )
  }
}
export default App
