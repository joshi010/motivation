import React, { useState, useEffect } from "react";
import './timeManagement.css';
import AdsTool from "../../ads/adsTools";

const congrats = ['Well done', 'Bravo', 'Good job', 'Excellent work', 'Great job', 'Fantastic', 'Outstanding', 'Kudos to you', 'Way to go', 'You did it', 'Congratulations'];
const messege = ["Wow, you did an amazing job! Are you ready to take on the next challenge?", "That was incredible! How about we keep this momentum going?", "Incredible work! You're unstoppable! What's next on your list?", "Fantastic job! Do you want to take on another task?", "Amazing effort! You're on a roll! How about we tackle another task together?", "Outstanding job! Your drive is impressive! Do you want to continue working on something else?", "Great work! You're an inspiration! What do you think about taking on another goal?", "Excellent performance! Your enthusiasm is inspiring! Are you ready to keep pushing forward?", "You are absolutely crushing it! Your determination is inspiring! What's the next challenge you want to tackle?"];

export default function NextPopup({handleNext}){
    const math = Math.floor(Math.random()*(congrats.length -1));
    const mes = Math.floor(Math.random()*(messege.length -1));

    return(
        <div className="finished-clocking-popup" style={{height:'100% !important'}}>
            <div>
                <h1 style={{padding:'10px 0'}}>{congrats[math]}!</h1>
                <h2>{messege[mes]}</h2>
            </div>

                <AdsTool slot="2719709638" googleAdId="ca-pub-8147046340459290" style={{ display:"inline-block", width:"300px", height:"250px" }} classNames={"add-tool"}/>

            <button onClick={handleNext} className="link-button">Next</button>
        </div>
    )
}