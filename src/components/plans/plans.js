import React from "react";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import { selectPlans } from "./components/plan-slice";
import { Link } from "react-router-dom";
import './plans.css';

export default function Plans(){
    const plans = useSelector(selectPlans);
    const filteredPlans = Object.values(plans);

    return(
        
        <div className="vh-100 bg-default">
            <div className="margins">
                <h1 className="section-title">Plans</h1>
                <div style={{display: 'flex', flexDirection: 'column', gap: 25}}>
                    {
                        filteredPlans.map((plan, i) => {
                            return(
                                <div key={i} style={{background: 'linear-gradient(69deg, #000 12%,  rgb(13, 14, 28))' }}>
                                    <div className="plans-card">
                                        <div style={{display: 'flex', flexDirection:'column', gap: '8px'}}>
                                            <h2>{plan.title}</h2>
                                            <div>
                                                <h4>{plan.description}</h4>
                                            </div>
                                        </div>
                                        <Link className="link-button align-self-right" to={plan.slug}>Start</Link>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}