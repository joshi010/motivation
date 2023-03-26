import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './timeManagement.css';
import AdsTool from "../../ads/adsTools";


export default function FinishedTask(){


    return(
        <div className="finished-clocking-popup" style={{height:'100% !important'}}>
            <div>
                <h1>Congratulations!</h1>
                <h2>You just finished todays tasks!</h2>
            </div>

                <AdsTool slot="2719709638" googleAdId="ca-pub-8147046340459290" style={{ display:"inline-block", width:"300px", height:"250px" }} classNames={"add-tool"}/>

            <Link to='/tools' className="link-button">Go Back</Link>
        </div>
    )
}