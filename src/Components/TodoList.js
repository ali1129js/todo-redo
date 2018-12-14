/**
 * @Author: Ali
 * @Date:   2018-12-14T07:56:08+01:00
 * @Last modified by:   Ali
 * @Last modified time: 2018-12-14T08:06:18+01:00
 */
import React from 'react'
// a stateless functional Component
const TodoList = (props) => {
  return (
    <ul>
      {props.todos.map((todo, index) => {
        return (
          <li key={todo.title}>
            <input
             type="checkbox"
             onChange={(e) => props.toggleTodoDone(e, index)}
             checked={todo.done}
            />
            <span style={{
              textDecoration: todo.done ? 'line-through' : 'inherit'
            }}>{todo.title}</span>
            <button onClick={() => props.removeTodo(index)}> Remove </button>
          </li>
        )
      })}
    </ul>
  )
}
export default TodoList
