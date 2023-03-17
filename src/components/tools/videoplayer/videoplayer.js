import React from "react";


export default function VideoPlayer({url}) {



    return(
        <video autoplay controls>
            <source src={url} type="video/mp4"/>
        </video>
    )
} 