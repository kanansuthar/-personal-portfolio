import React from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';
function Navbar(props) {
    return (
        <nav className="navbar">
            <h1>Kanan Portfolio </h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/skills">Skills</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/todo">Todo</Link></li>
                <li>
                     <a href="https://github.com/kanansuthar" target="_blank">
                    GitHub
                     </a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;