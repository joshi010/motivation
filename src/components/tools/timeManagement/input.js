import React from "react";

export default function Input({handleSubmit, handleChange, task}){


    return(
        <form className="new-task-form" onSubmit={handleSubmit}>

            <input 
                name="title"
                placeholder="Input a Task"
                value={task.title || ''}
                onChange={handleChange}
                id="task"         
            />
            <input 
                name="time"
                type="number"
                placeholder={'Min.'}
                value={task.time || ''}
                onChange={handleChange}
                min='1'
                id="numbers"
                required
            />
                
            <button type="submit" className="link-button" style={{marginTop:2, gridColumn:'1/4', height:'100%'}}>submit</button>
        </form>
    )
}