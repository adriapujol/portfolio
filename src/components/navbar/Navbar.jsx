import React from 'react';
import './Navbar.scss';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo">
                <a className="home-link" href="#home">LOGO</a>
            </div>
            <div className="nav-links">
                <a className="link" href="#about">About</a>
                <a className="link" href="#projects">Projects</a>
                <a className="link" href="#contact">Contact</a>
            </div>
        </div>
    )
}

export default Navbar
