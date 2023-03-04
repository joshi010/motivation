import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {

    return(
        <footer>

            <div className="articles about-us">
                <h3>Featured Articles</h3>
                <ul>
                    <li><Link to="/articles/breaking-the-chains-of-addiction" title="Breaking the Chains of Addiction: Why It’s Important to Seek Help">Breaking the Chains of Addiction: Why It’s Important to Seek Help</Link></li>
                    <li><Link to="/articles/how-to-achive-your-goals-step-by-step" title="How to Achieve Your Goals: A Step-by-Step Guide">How to Achieve Your Goals: A Step-by-Step Guide</Link></li>
                    <li><Link to="/articles/breaking-out-of-the-habbit-loop" title="Breaking Out of the Habit Loop: How to Construct Better Habits">Breaking Out of the Habit Loop: How to Construct Better Habits</Link></li>
                    <li><Link to="/articles/from-inspiration-to-action" title="From Inspiration to Action: How to Achieve Your Goals">From Inspiration to Action: How to Achieve Your Goals</Link></li>                    
                </ul>
            </div>
            <div className="articles about-us">
                    
            </div>
        </footer>
    )
}