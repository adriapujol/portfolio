import React, { useState } from 'react';
import './Navbar.scss';

const Navbar = () => {

    const [solidBackground, setSolidBackground] = useState(false);

    const changeBackground = () => {
        if (window.scrollY > 150) {
            setSolidBackground(true);
        } else {
            setSolidBackground(false);
        }
    }

    window.addEventListener('scroll', changeBackground);

    return (
        <div className={solidBackground ? "navbar bg-solid" : "navbar"}>
            <div className="logo">
                <a className="home-link" href="#home">LOGO</a>
            </div>
            <div className="nav-links">
                <a className={solidBackground ? "link link-white" : "link link-black"} href="#about">About</a>
                <a className={solidBackground ? "link link-white" : "link link-black"} href="#projects">Projects</a>
                <a className={solidBackground ? "link link-white" : "link link-black"} href="#contact">Contact</a>
            </div>
        </div>
    )
}

export default Navbar
