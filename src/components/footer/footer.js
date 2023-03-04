import React from "react";
import { Link } from "react-router-dom";
import Form from "../form/form";

export default function Footer() {


    return(
        <footer>

            <div className="about-us">
                <div>
                    <h3>Featured Articles</h3>
                    <ul>
                        <li><Link className="footer-link" to="/articles/breaking-the-chains-of-addiction" title="Breaking the Chains of Addiction: Why It’s Important to Seek Help">Breaking the Chains of Addiction: Why It’s Important to Seek Help</Link></li>
                        <li><Link className="footer-link" to="/articles/how-to-achive-your-goals-step-by-step" title="How to Achieve Your Goals: A Step-by-Step Guide">How to Achieve Your Goals: A Step-by-Step Guide</Link></li>
                        <li><Link className="footer-link" to="/articles/breaking-out-of-the-habbit-loop" title="Breaking Out of the Habit Loop: How to Construct Better Habits">Breaking Out of the Habit Loop: How to Construct Better Habits</Link></li>
                        <li><Link className="footer-link" to="/articles/from-inspiration-to-action" title="From Inspiration to Action: How to Achieve Your Goals">From Inspiration to Action: How to Achieve Your Goals</Link></li>                    
                    </ul>
                </div>

                {/* <div>
                    <h3>Socials</h3>
                    <div>
                    
                    </div>
                </div> */}
            </div>

            <div className="about-us formDataFooter">
                <div>
                    <h3>Your Words of Encouragement</h3>
                    <p>Stay motivated with our daily email reminders and your own words of Encouragement</p>
                </div>
                <Form />
            </div>


        </footer>
    )
}