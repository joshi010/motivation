import React, { useState, useEffect } from "react";
import '../tools.css';
import NextPopup from "./nextPopup";
import notif from './finished-task.mp3';

export default function List({name, handleDelete, startTimer}) {

    const [prueba, setPrueba] = useState([]);
    const [startCopy, setStartCopy] = useState();
    const [clocking, setClocking] = useState(false);
    
    useEffect(() => {
        setPrueba([...name]);
    }, [name]);

    useEffect(() => {
        setStartCopy(startTimer);
    }, [startTimer]);
    
    const audio = new Audio(notif);
    const handleClick = () => {
        audio.play();
        const copy = [...prueba];
        copy.shift();
        setStartCopy(false);
        setPrueba(copy);
    }

    
    const handleNext = () => {
        setStartCopy(true);
    }
    
    useEffect(() => {
        if(startCopy) {
            setClocking(false);
            const startTime = Date.now();
            const setTime = prueba[0].time*1 * 60000
            const futureTime = startTime + setTime;
            const semicircles = document.querySelectorAll('.semicircle');
           
            const interval = setInterval(() => {
                const currentTime = Date.now();
                const remainingTime = futureTime - currentTime;
                const angle = (remainingTime / setTime) * 360;
                // console.log(angle);
    
                if(angle > 180) {
                    semicircles[2].style.display = 'none';
                    semicircles[0].style.transform = 'rotate(180deg)';
                    semicircles[1].style.transform = `rotate(${angle}deg)`;
                } else {
                    semicircles[2].style.display = 'block';
                    semicircles[0].style.transform = `rotate(${angle}deg)`;
                    semicircles[1].style.transform = `rotate(${angle}deg)`;
                }
    
                if(remainingTime < 0) {
                    clearInterval(interval);
                    handleClick();
                    setClocking(true);
                    
                }
            });
            
        }
    })


    

    return(
        <div style={{marginTop:10}} className="list-storage">

            {   
                name ? (

                    prueba.map((x) => {
                        return(
                            <div style={{cursor:'pointer'}} className="list-container" key={x.id} onClick={() => handleDelete(x.id)}>
                            <div className="task-title">{x.title}</div>
                            <div className="time-tool-container">
                                <div className="circle-time-tool">
                                    <div className="semicircle"></div>
                                    <div className="semicircle"></div>
                                    <div className="semicircle"></div>
                                </div>
                                <div className="task-time">{x.time} min</div>
                            </div>
                        </div>
                        )
                    })) : ''        
            }
            
            {
                clocking ? (
                    <NextPopup  handleNext={handleNext} />
                ) : ''
            }
        </div>
    )
}
