/**
 * @Author: Ali
 * @Date:   2018-12-14T07:56:08+01:00
 * @Last modified by:   Ali
 * @Last modified time: 2018-12-14T11:22:00+01:00
 */
import React from 'react'
import TodoItems from './TodoItems'

// a stateless functional Component
const TodoList = (props) => {
  return (
    <ul>
      {props.todos.map((todo, index) => {
        return (
          <TodoItems
            key={index}
            index={index}
            todo={todo}
            toggleTodoDone={props.toggleTodoDone}
            removeTodo={props.removeTodo}
          />
        )
      })}
    </ul>
  )
}
export default TodoList
