import React, { useState } from 'react';
import { ReactComponent as Logo } from '../../img/logo.svg';
import './Navbar.scss';
import { Link, animateScroll as scroll } from 'react-scroll';


const Navbar = ({ setNavHeight }) => {

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

    const scrollToTop = () => {
        scroll.scrollToTop();
    }


    let whiteBurger1 = clickedBurger ? "burger-line line-1 burger-white" : "burger-line burger-white";
    let whiteBurger2 = clickedBurger ? "burger-line line-2 burger-white" : "burger-line burger-white";
    let whiteBurger3 = clickedBurger ? "burger-line line-3 burger-white" : "burger-line burger-white";
    let blackBurger1 = clickedBurger ? "burger-line line-1 burger-black" : "burger-line burger-black";
    let blackBurger2 = clickedBurger ? "burger-line line-2 burger-black" : "burger-line burger-black";
    let blackBurger3 = clickedBurger ? "burger-line line-3 burger-black" : "burger-line burger-black";


    return (
        <div className={solidBackground ? "navbar bg-solid" : "navbar"} >
            <div className="logo">
                <div className="home-link" onClick={scrollToTop}>
                    <Logo className="logo-icon" fill={solidBackground ? "#fff" : "#000"} />
                </div>
            </div>
            <div className="burger-menu" onClick={updateBurger}>
                <div className={solidBackground && !clickedBurger ? whiteBurger1 : blackBurger1}></div>
                <div className={solidBackground && !clickedBurger ? whiteBurger2 : blackBurger2}></div>
                <div className={solidBackground && !clickedBurger ? whiteBurger3 : blackBurger3}></div>
            </div>
            <div className={clickedBurger ? "nav-links show-menu" : "nav-links"}>
                <Link
                    className={solidBackground && !clickedBurger ? "link link-white" : "link link-black"}
                    onClick={clickedBurger ? updateBurger : null}
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-40}
                    duration={300}
                >About</Link>
                <Link
                    className={solidBackground && !clickedBurger ? "link link-white" : "link link-black"}
                    onClick={clickedBurger ? updateBurger : null}
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={-45}
                    duration={300}
                >Projects</Link>
                <Link
                    className={solidBackground && !clickedBurger ? "link link-white" : "link link-black"}
                    onClick={clickedBurger ? updateBurger : null}
                    to="contact"
                    spy={true}
                    smooth={true}
                    duration={300}
                >Contact</Link>
            </div>
        </div>
    )
}

export default Navbar
