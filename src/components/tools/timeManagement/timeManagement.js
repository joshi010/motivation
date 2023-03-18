import React, { useEffect, useState } from "react";
import List from "./list";
import Input from "./input";
import '../tools.css';

export default function TimeManagement(){
    const [task, setTask] = useState({});
    const handleChange = ({target}) => {
        const {name, value } = target;
        setTask((prev) => ({...prev, id: Date.now(), [name]: value}));


    }
 
    const [name, setNames] = useState([]); 
    const handleSubmit = (event) => {
        
        event.preventDefault();
        if(!task.title) return;
        setNames((prev) => [task, ...prev]);
        setTask({});
        setClicked(false);
    }
    
     
    const handleDelete = (deleteID) => {
        setNames((prev) => prev.filter((task) => task.id !== deleteID));
    }

    const [clicked, setClicked] = useState(false);
    const handleClick = () => {
        setClicked(true);
    }

    return(
        <div className="vh-100 bg-default">
            <div className="margins">
                <h1 className="section-title">Time Management</h1>
                {
                    clicked ? (
                        <Input handleChange={handleChange} task={task} handleSubmit={handleSubmit}/>
                    ) : ''
                }
                <List name={name} handleDelete={handleDelete}/>

                <div className="add-task" onClick={handleClick}>
                    Add
                </div>
            </div>
        </div>
    )
}