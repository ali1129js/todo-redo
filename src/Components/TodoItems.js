/**
 * @Author: Ali
 * @Date:   2018-11-19T07:14:25+01:00
 * @Last modified by:   Ali
 * @Last modified time: 2018-12-14T11:23:54+01:00
 */
import React  from 'react'

const TodoItems = props => {
  //Destructuring 
  const {todo, index} = props
  return (
    <li key={todo.title}>
      <input
       type="checkbox"
       onChange={(e) => props.toggleTodoDone(e, index)}
       checked={props.todo.done}
      />
      <span style={{
        textDecoration: props.todo.done ? 'line-through' : 'inherit'
      }}>{props.todo.title}</span>
      <button onClick={() => props.removeTodo(index)}> Remove </button>
    </li>
  )
}
export default TodoItems
