import React, { useState } from "react";
import '../tools.css';

export default function List({name, handleDelete}) {

    // const storedTasks = localStorage.getItem("tasks");
    // let tasks;

    // if (storedTasks) {
    //     try {
    //         tasks = JSON.parse(storedTasks);
    //       } catch (error) {
    //         console.error('Error parsing tasks from localStorage:', error);
    //       }
    //   } else {
    //     tasks = [];
    //   }


    return(
        <div style={{marginTop:10}} className="list-storage">

            {   
                

                    name.map((x) => {
                        return(
                            <div style={{cursor:'pointer'}} className="list-container" key={x.id} onClick={() => handleDelete(x.id)}>
                            <div className="task-title">{x.title}</div>
                            <div className="task-time">{x.time} minutes</div>
                        </div>
                    )
                    
                }
                
                )
        
            }
        </div>
    )
}