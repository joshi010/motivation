import React from "react";
import './Nav.css';
import { Link, NavLink } from "react-router-dom";


export default function Nav() {


    return(
        <nav>
            <div className="logo">
                TAKE ACTION
            </div>

            <ul>
                <li><NavLink className="naving" to='/'>Home</NavLink></li>
                <li><NavLink className="naving" to='/articles'>Articles</NavLink></li>
                <li>Plans</li>
                <li>About</li>
            </ul>
        </nav>
    )
}