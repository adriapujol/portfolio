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


    let whiteBurger1 = clickedBurger ? "burger-line line-1 burger-white" : "burger-line burger-white";
    let whiteBurger2 = clickedBurger ? "burger-line line-2 burger-white" : "burger-line burger-white";
    let whiteBurger3 = clickedBurger ? "burger-line line-3 burger-white" : "burger-line burger-white";
    let blackBurger1 = clickedBurger ? "burger-line line-1 burger-black" : "burger-line burger-black";
    let blackBurger2 = clickedBurger ? "burger-line line-2 burger-black" : "burger-line burger-black";
    let blackBurger3 = clickedBurger ? "burger-line line-3 burger-black" : "burger-line burger-black";


    return (
        <div className={solidBackground ? "navbar bg-solid" : "navbar"}>
            <div className="logo">
                <a className="home-link" href="#home">LOGO</a>
            </div>
            <div className="burger-menu" onClick={updateBurger}>
                <div className={solidBackground && !clickedBurger ? whiteBurger1 : blackBurger1}></div>
                <div className={solidBackground && !clickedBurger ? whiteBurger2 : blackBurger2}></div>
                <div className={solidBackground && !clickedBurger ? whiteBurger3 : blackBurger3}></div>
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
