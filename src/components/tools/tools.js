import React, { useState, useEffect } from "react";
import { videos } from "./videoplayer/videos-info";
import { Helmet } from "react-helmet";
import { toolsList } from "./tools-info";
import './tools.css';
import { Link } from "react-router-dom";

export default function Tools() {
    const [isClicked, setIsClicked] = useState(false);
    const [random, setRandom] = useState(0);

    useEffect(() => {

        if(isClicked){
            const videoElement = document.getElementById('video');  
            videoElement.currentTime = 0;
            videoElement.load();
        }

    }, [random]);

    const handleClick = () => {
        const random = Math.floor(Math.random()*videos.length);
        console.log(random);
        setRandom(random);
        setIsClicked(true);
    }



    return(
        <div className="bg-default vh-100">
            <Helmet>
                <title>Tools to Stay on Task: Overcome Procrastination and Get More Done</title>
                <meta name="description" content="Discover top tools and techniques to help you stay on task and maximize your productivity. Our guide includes expert recommendations and proven strategies to overcome procrastination and achieve your goals." />
            </Helmet>
            <div className="margins">
                <h1 className="section-title">Tools</h1>
            
                <div className="tools-motivation-videos">
                    <div style={{display:'flex', alignItems:'center'}}>
                        <h2>Need Motivation?</h2>
                    </div>

                        {
                            isClicked ? (
                                <div className="video-motivation-container">
                                        <video id='video' autoplay controls>
                                            <source src={videos[random]} type="video/mp4"/>
                                        </video>
                                </div>
                            ) : ''
                        }
                    
                    <div style={{display:'flex', alignItems:'center'}}>
                        <button onClick={handleClick} className="link-button">Motivate Me</button>

                    </div>
                </div>

                <div>
                    {
                        toolsList.map((x, i) => {
                            return (
                                <div className="tool-element-list" key={i}>
                                    <h3>{x.name}</h3>
                                    <Link to={x.link} className="link-button" style={{display:'block'}}>Start</Link>
                                </div>
                            )
                        })
                    }
                </div>

            </div>
        </div>
    )
}