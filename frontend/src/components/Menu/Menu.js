import React from 'react';
import {Link} from 'react-router-dom';
import {FaCalendarCheck} from 'react-icons/fa'
import './style.css'
function Menu(){
    return(
        <nav className="nav navbar-inverse bg-inverse navbar-dark bg-dark">
            
                    <Link to="/" className="nav-link navbar-brand">
                    <FaCalendarCheck size={30} />
                        TaskApp
                    </Link>
            
                    <Link className="nav-link menu-link" to="/">Tasks</Link>
                    <Link className="nav-link menu-link" to="/about">About</Link>
            
        </nav>
    )
}
export default Menu;