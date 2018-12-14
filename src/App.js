/**
 * @Author: Ali
 * @Date:   2018-10-26T11:54:42+02:00
 * @Last modified by:   Ali
 * @Last modified time: 2018-12-14T07:51:18+01:00
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
        title: "Learn jsx",
        done: false
      }
       ]
    }
    this.formSubmitted = this.formSubmitted.bind(this)
    this.newTodoChanged = this.newTodoChanged.bind(this)
  }
  formSubmitted(e){
    e.preventDefault()
    //instead of using [].push() -we make a copy of todos and we use the spread operator.
    //then we define the new todo we want to add
    this.setState({
      newTodo: '',
      todos: [...this.state.todos,
        {
        title:this.state.newTodo,
        done:false
      }]
    })
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
  toggleTodoDone(e, index){
    console.log(e.target.checked)
    // we make a copy of the todos "again"
    const todos = [...this.state.todos]
    //copy the TODO {...} is the same as Object.assign
    todos[index] = {...todos[index]}
    //update done property on copied todos
    todos[index].done = e.target.checked
    this.setState({
      todos
    })
  }
  removeTodo(index){
    const todos = [...this.state.todos] //copy the array
    todos.splice(index, 1) //new array missing that index
    this.setState({
      todos
    })
  }
  allDone(){
    //map is creating a new array and for every todo is creating a new object with all the existing properties but with done set to true
    const todos = this.state.todos.map(todo => {
      return {
        ...todo, // or we can do title:todo.title
        done: true
      }
    })
    this.setState({
      todos
    })
  }
  render(){
      return (
        <div>
          {this.state.message}
            <Form
             newTodo={this.state.newTodo}
             formSubmitted={this.formSubmitted}
             newTodoChanged={this.newTodoChanged}
           />
          <button onClick={() => this.allDone()}> All Done </button>
          <ul>
            {this.state.todos.map((todo, index) => {
              return (
                <li key={todo.title}>
                  <input type="checkbox" onChange={
                    (e) => this.toggleTodoDone(e, index)}
                    checked={todo.done}
                  />
                  <span style={{
                    textDecoration: todo.done ? 'line-through' : 'inherit'
                  }}>{todo.title}</span>
                  <button onClick={() => this.removeTodo(index)}> Remove </button>
                </li>
              )
            })}
          </ul>
        </div>
      )
  }
}
export default App
