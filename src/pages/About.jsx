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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus sollicitudin porta arcu a pharetra.
                    Curabitur aliquet arcu vitae risus efficitur,
                    quis aliquet arcu dapibus. Quisque eros mi, posuere ac odio at,
                    imperdiet tempus risus. Donec vehicula, ante id mollis facilisis,
                    orci sem commodo urna, eu luctus risus risus a magna.
                    Vestibulum blandit nec massa id suscipit. Fusce eu velit lectus.
                    </div>
                <h1 className="section-title">Skills</h1>
                <div className="skills-text">HTML, CSS, JavaScript, React, Photoshop, Illustrator</div>
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
