import React, { useEffect, useState } from "react";
import List from "./list";
import Input from "./input";
import '../tools.css';
import { Helmet } from "react-helmet";



const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }

export default function TimeManagement(){
    const [task, setTask] = useState({});
    const handleChange = ({target}) => {
        const {name, value } = target;
        setTask((prev) => ({...prev, id: Date.now(), [name]: value}));
    }
 
    const [name, setNames] = useState([{title: 'Add a task and click to remove', time: 0}]); 
    const handleSubmit = (event) => {
        event.preventDefault();
        if(!task.title) return;
        setNames((prev) => [task, ...prev]);
        setTask({});
        setClicked(false);
    }

    const [time, setTime] = useState(0);
    const [i, setI] = useState(0);
    useEffect(() => {
        if(i === 0) {
            const store = localStorage.getItem('tasks');
            if(store) {
                setNames(JSON.parse(store));
            }
        } else {
            localStorage.setItem('tasks', JSON.stringify([...name]));
        }
        setI(prev => prev + 1);
    }, [name]);


    useEffect(() => {
        setTime(0);
        name.forEach(x => {
            setTime(prev => prev + parseInt(x.time));
        })
    }, [name]);
     
    const handleDelete = (deleteID) => {
        setNames((prev) => prev.filter((task) => task.id !== deleteID));
    }

    const [clicked, setClicked] = useState(false);
    const handleClick = () => {
        setClicked(true);
    }

    const [shuffled, setShuffled] = useState(false);
    const handleShuffle = () => {
        setNames(shuffle([...name]));
        setShuffled(true);
    }

    
    const [startTimer, setStartTimer] = useState(false);
    const handleStart = () => {
        setStartTimer(prev => !prev);
    }

    

    return(
        <div className="vh-100 bg-default">
            <Helmet>
                <title>BetterSteps - Time Management</title>
            </Helmet>
            <div className="margins">
                <h1 className="section-title">Time Management</h1>
                {
                    clicked ? (
                        <Input handleChange={handleChange} task={task} handleSubmit={handleSubmit}/>
                    ) : ''
                }
                <div style={{color:'#c1c1c1', marginTop:20}}>Total Time: {time} min.</div>
                <List name={name} handleDelete={handleDelete} startTimer={startTimer}/>

                <div className="time-management-buttons-container">
                    <div className="add-task" onClick={handleShuffle}>
                        Shuffle
                    </div>
                    <div className="add-task" onClick={handleClick}>
                        Add
                    </div>
                    {
                        shuffled ? (
                        <div className="add-task" id="start" onClick={handleStart}>
                            Start
                        </div>

                        ) : ''
                    }
                </div>
            </div>
        </div>
    )
}