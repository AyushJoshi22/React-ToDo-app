import React from 'react'

const TodoList = ({ todos, handleDelete, handleEdit, handleComplete }) => {
    return (
        <ul className='allTodos'>
            {todos.map((t) => (
                <li className="singleTodo" key={t.id}>
                    <span className="todoText" style={{ textDecoration: t.completed ? 'line-through' : 'none' }}>
                        {t.todo}
                    </span>

                    <button onClick={() => handleComplete(t.id)}>
                        {t.completed ? 'Undo' : 'Complete'}
                    </button>
                    <button onClick={() => handleEdit(t.id)}>Edit</button>

                    <button onClick={() => handleDelete(t.id)}>Delete</button>
                </li>
            ))}
        </ul>
    )
}

export default TodoList