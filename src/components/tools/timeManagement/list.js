import React, { useState } from "react";
import '../tools.css';

export default function List({name, handleDelete}) {



    

    return(
        <div style={{marginTop:10}} className="list-storage">

            {   
                name ? (

                    name.map((x) => {
                        return(
                            <div style={{cursor:'pointer'}} className="list-container" key={x.id} onClick={() => handleDelete(x.id)}>
                            <div className="task-title">{x.title}</div>
                            <div className="time-tool-container">
                                <div className="circle-time-tool"></div>
                                <div className="task-time">{x.time} min</div>
                            </div>
                        </div>
                        )
                    })) : ''        
            }
        </div>
    )
}
