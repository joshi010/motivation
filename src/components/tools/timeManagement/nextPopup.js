import React, { useState, useEffect } from "react";
import './timeManagement.css';
import AdsTool from "../../ads/adsTools";


export default function NextPopup({handleNext}){


    return(
        <div className="finished-clocking-popup" style={{height:'100% !important'}}>
            <div>
                <h1>Congratulations!</h1>
                <h2>You just finished a task, do you want to keep going?</h2>
            </div>

                <AdsTool slot="2719709638" googleAdId="ca-pub-8147046340459290" style={{ display:"inline-block", width:"300px", height:"250px" }} classNames={"add-tool"}/>

            <button onClick={handleNext} className="link-button">Next</button>
        </div>
    )
}