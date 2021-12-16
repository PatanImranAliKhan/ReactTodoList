import React, {useState} from 'react'

import {TodoItem} from './TodoItem';

import { AddTodo } from './AddTodo';

export const Todos = () => {

    function addNewTodo(title,time)
    {
        let s=todos[todos.length-1].sno+1;
        const t={
            sno: s,
            title: title,
            time: time
        }
        setCount([...todos,t])
    }

    function onDelete(todo)
    {
        console.log(todo)
        setCount(todos.filter((e) => {
            return e!==todo
        }))
    }

    const [todos, setCount] = useState([
        {
            sno:1,
            title: 'Brush Teeth',
            time: '6:30AM'
        },
        {
            sno:2,
            title: 'Have beakfast',
            time: '7:00AM'
        },
        {
            sno:3,
            title: 'Move to college',
            time: '7:30AM'
        },
    ])
    return (
        <div>
            <AddTodo addNewTodo={addNewTodo}/>
            <br/>
            {todos.length===0? "Todo List is Empty": 
                todos.map((todo) => {
                    return <TodoItem todo={todo} key={todo.sno} onDelete={onDelete}></TodoItem>
                })
            }
        </div>
    )
}
