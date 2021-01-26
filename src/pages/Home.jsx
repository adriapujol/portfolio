import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import drawing from '../img/meDrawing.png';
import './Home.scss';



const Home = () => {

    return (
        <div className="full-box bg-yellow" id="home">
            <div className="hero">
                <div className="title-content">
                    <div className="title">Adrià Pujol</div>
                    <div className="subtitle">Front End Developer &</div>
                    <div className="subtitle">Photo Retoucher</div>
                    <div className="call-box">
                        <Link
                            className="call-to-action"
                            to="projects"
                            spy={true}
                            smooth={true}
                            duration={300}
                        >Portfolio </Link>
                        <Link
                            className="call-to-action"
                            to="contact"
                            spy={true}
                            smooth={true}
                            duration={300}
                        >Contact me</Link>
                    </div>
                </div>
                <img className="landing-img" src={drawing} alt="Adria Pujol" />
            </div>
        </div>
    )
}

export default Home
