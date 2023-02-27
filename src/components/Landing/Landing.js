import React from "react";
import Phrase from "../Phrase";
import { article } from "../landingArt";
import { Helmet } from "react-helmet";
import './Landing.css';

export default function Landing() {



    return(
        <div className="bg-default">
            <Helmet>
                <title>Home-Motivational</title>
            </Helmet>
            <header>
                <div>
                    <Phrase />
                </div>
                <a href="#secs" className="link-button">Take Action</a>
            </header>

            <div style={{marginBottom: 100}}>
                <div id="secs" className="steps">
                    <div>
                        <div className="small-circle">1</div>
                    </div>
                    <div>
                        <div className="small-circle">2</div>
                    </div>
                    <div>
                        <div className="small-circle">3</div>
                    </div>
                    <div>
                        <div className="small-circle">4</div>
                    </div>
                </div>

                <div className="steps">
                    <h2>There Are the 4 Base Steps on Taking Action</h2>
                </div>
            </div>

            <main>
                <div className="sections margins">
                    {article.map(({title, text}, index) => {
                        return(
                            <div className={index % 2 == 0 ? 'left' : 'right'} key={title}>
                                    <div className="circle-big">
                                        {index + 1}
                                    </div>
                                <div className="steps-cont">
                                    <div>
                                        <h3>{title}</h3>
                                        <p>{text}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                    {/* <a style={{margin: '15px auto'}} className="link-button">Get Help</a> */}
                </div>
   
            </main>
            <article className="margins">
                <div style={{textAlign: 'center', display: "flex", flexDirection:'column', gap: 15}} className="center-x">
                    <h2>Why Should I set up Goals?</h2>
                    <p>
                        Setting goals means deciding what you want to achieve and making a plan to get there. It is important as it helps
                        you stay focused and motivated, and it gives you a sense of accomplishment when you reach your goals. By setting goals, you can become a better version of yourself and live a happier, more successful life.
                    </p>
                </div>
            </article>

            <div style={{gap: 20, margin: '0 auto', textAlign: 'center'}} className="margins">
                <hr></hr>
                <div style={{display:'flex', flexDirection: 'column', justifyContent:'center', height: '60vh', gap: 15}} className="center-x">
                    <div>
                        <h2 style={{fontSize: 40}}>Break Your Adiction</h2>
                        <p>Breaking free from addiction is a crucial step towards gaining control of one's life and embarking on the path towards achieving personal goals.</p>
                    </div>
                    <a className="link-button" href="#">Take Action</a>
                </div>
                <hr></hr>
            </div>
            
            


        </div>
    )
}