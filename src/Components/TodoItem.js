import React from 'react'

export const TodoItem = ({todo,onDelete}) => {
    return (
        <div className="container">
            {todo.sno}&nbsp;&nbsp;<h5>{todo.title}</h5>
            <h6>{todo.time}</h6>
            <button className="btn btn-sm btn-danger" onClick={() => {onDelete(todo)}}>Delete</button>
        </div>
    )
}
