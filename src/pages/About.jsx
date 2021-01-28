import React from 'react';
import './About.scss';
import cssLogo from '../img/css.png';
import htmlLogo from '../img/html.png';
import jsLogo from '../img/javascript.png';
import reactLogo from '../img/react.png';
import phLogo from '../img/photoshop.png';
import aiLogo from '../img/ilustrator.png';

const About = () => {

    return (
        <div className="no-full-box bg-black" id="about">
            <div className="about">
                <h1 className="section-title">About</h1>
                <div className="about-me">
                    Motivated and multifaceted Bachelor in Telecommunication Technologies Engineering 
                    focused and highly interested in web development. 
                    A strong team player with genuine drive for self-improvement. 
                    With over 8 years of experience on the audiovisual world 
                    and used to work in a high paced environment.
                </div>
                <h1 className="section-title">Skills</h1>
                <div className="skills-text">HTML, CSS, JavaScript, React, Photoshop, Illustrator.</div>
                <div className="img-box">
                    <img src={htmlLogo} alt="HTML" />
                    <img src={cssLogo} alt="CSS" />
                    <img src={jsLogo} alt="JavaScript" />
                    <img src={reactLogo} alt="React" />
                    <img src={phLogo} alt="Photoshop" />
                    <img src={aiLogo} alt="Illustrator" />
                </div>
            </div>
        </div>
    )
}

export default About
