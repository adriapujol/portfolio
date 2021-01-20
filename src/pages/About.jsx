import React, { useEffect } from 'react';
import './About.scss';

const About = ({ setAboutHeight }) => {

    useEffect(() => {
        setAboutHeight(document.getElementById("about").offsetHeight);
    }, [setAboutHeight])

    return (
        <div className="content-wrapper" id="about">
            <div className="full-box bg-black">
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
                </div>
            </div>
        </div>
    )
}

export default About
