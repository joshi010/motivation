import React from "react";
import './Nav.css';
import { NavLink } from "react-router-dom";


export default function Nav() {

    const handleClick = () => {
        document.querySelector('.lists-nav').classList.toggle('list-nav-active');
    }

    return(
        <nav>
            <div className="logo">
                <NavLink style={{color:'#c1c1c1', textDecoration:'none'}} to='/'><span onClick={handleClick}>BetterSteps</span></NavLink>
            </div>

            <ul className="lists-nav">
                <li onClick={handleClick} ><NavLink className="naving" to='/'>Home</NavLink></li>
                <li onClick={handleClick}><NavLink className="naving" to='/articles'>Articles</NavLink></li>
                <li onClick={handleClick}><NavLink className="naving" to='/plans'>Plans</NavLink></li>
                <li onClick={handleClick}><NavLink className="naving" to='/tools'>Tools</NavLink></li>
            </ul>

            <div className="ham" onClick={handleClick}>
                <div className="ham-line">

                </div>
                <div className="ham-line">

                </div>
                <div className="ham-line">

                </div>
            </div>
        </nav>
    )
}