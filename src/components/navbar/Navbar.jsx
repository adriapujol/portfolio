import React, { useState } from 'react';
import './Navbar.scss';

const Navbar = () => {

    const [solidBackground, setSolidBackground] = useState(false);
    const [clickedBurger, setClickedBurger] = useState(false);

    const changeBackground = () => {
        if (window.scrollY > 150) {
            setSolidBackground(true);
        } else {
            setSolidBackground(false);
        }
    }

    const updateBurger = () => {
        setClickedBurger(burger => setClickedBurger(!burger));
    }

    window.addEventListener('scroll', changeBackground);

    return (
        <div className={solidBackground ? "navbar bg-solid" : "navbar"}>
            <div className="logo">
                <a className="home-link" href="#home">LOGO</a>
            </div>
            <div className="burger-menu" onClick={updateBurger}>
                <div className={clickedBurger ? "burger-line line-1 burger-black" : "burger-line burger-black"}></div>
                <div className={clickedBurger ? "burger-line line-2 burger-black" : "burger-line burger-black"}></div>
                <div className={clickedBurger ? "burger-line line-3 burger-black" : "burger-line burger-black"}></div>
            </div>
            <div className={clickedBurger ? "nav-links show-menu" : "nav-links"}>
                <a className={solidBackground && !clickedBurger ? "link link-white" : "link link-black"} href="#about">About</a>
                <a className={solidBackground && !clickedBurger ? "link link-white" : "link link-black"} href="#projects">Projects</a>
                <a className={solidBackground && !clickedBurger ? "link link-white" : "link link-black"} href="#contact">Contact</a>
            </div>
        </div>
    )
}

export default Navbar
