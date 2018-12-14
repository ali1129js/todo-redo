/**
 * @Author: Ali
 * @Date:   2018-11-12T06:40:05+01:00
 * @Last modified by:   Ali
 * @Last modified time: 2018-12-14T07:53:22+01:00
 */
import React from 'react'

//we create a stateless functional Component
const Form = props => {
  return (
   <form onSubmit={props.formSubmitted}>
      <input
        type="text"
        onChange={props.newTodoChanged}
        value={props.newTodo}
      />
      <button type="submit"> Add Todo </button>
    </form>
  )
}

export default Form
