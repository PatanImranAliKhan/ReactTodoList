import React, {useState} from 'react'

export const AddTodo = ({addNewTodo}) => {


    const [title, setTitle]=useState("")
    
    const [time,setTime]=useState("")


    const Submit = (e) => {
        e.preventDefault();
        if(!title || !time)
        {
            alert("Title and time was required")
        }
        addNewTodo(title,time)
    }

    return (
        <div className="container my-3">
            <h3>Add Todo</h3>
            <form onSubmit={Submit}>
                <div className="mb-3 col-7">
                    <label htmlFor="AddTodo" className="htmlForm-label">Add Todo</label>
                    <input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} id="AddTodo" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3 col-7">
                    <label htmlFor="time" className="htmlForm-label">Time</label>
                    <input type="time" className="form-control" value={time} onChange={(e) => setTime(e.target.value)} id="time"/>
                </div>
                <button type="submit" className="btn btn-success">Add Todo</button>
            </form>
        </div>
    )
}
