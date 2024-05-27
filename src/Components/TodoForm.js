import React from 'react'

const TodoFrom = ({handleSubmit,todo,setTodo}) => {
  return (
    <form className='todoForm' onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Add a todo"
      />
      <button type='submit'>Go</button>
    </form>
  )
}

export default TodoFrom