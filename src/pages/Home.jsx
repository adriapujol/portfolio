import React from 'react';
import './Home.scss';
import drawing from '../img/meDrawing.png';

const Home = () => {
    return (
        <div className="content-wrapper" id="home">
            <div className="hero full-box bg-yellow">
                <div className="title-content">
                    <div className="title">Adrià Pujol</div>
                    <div className="subtitle">Front End Developer &</div>
                    <div className="subtitle">Photo Retoucher</div>
                    <a className="call-to-action" href="#contact">Contact ME</a>
                </div>
                <img className="landing-img" src={drawing} alt="Adria Pujol" />
            </div>
        </div>
    )
}

export default Home
