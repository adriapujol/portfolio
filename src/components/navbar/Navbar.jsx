import React, { useState } from 'react';
import './Navbar.scss';

const Navbar = ({ homeHeight, aboutHeight, projectsHeight, contactHeight}) => {

    const [navLinks, setNavLinks] = useState("nav-links");

    const changeTextColor = () => {

        let firstTreshold = homeHeight - homeHeight*0.1;
        let secondTreshold = homeHeight + aboutHeight;
        let thirdTreshold = homeHeight + aboutHeight + projectsHeight - firstTreshold*0.1;

        console.log(window.scrollY);
        if (window.scrollY > firstTreshold && window.scrollY < secondTreshold || window.scrollY > thirdTreshold) {
            setNavLinks("alt-nav-links");
        } else {
            setNavLinks("nav-links");
        }
    }

    window.addEventListener('scroll', changeTextColor);



    return (
        <div className="navbar">
            <div className="logo">
                <a className="home-link" href="#home">LOGO</a>
            </div>
            <div className={navLinks}>
                <a className="link" href="#about">About</a>
                <a className="link" href="#projects">Projects</a>
                <a className="link" href="#contact">Contact</a>
            </div>
        </div>
    )
}

export default Navbar
