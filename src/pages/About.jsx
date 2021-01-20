import React, { useEffect } from 'react';

const About = ({ setAboutHeight }) => {

    useEffect(() => {
        setAboutHeight(document.getElementById("about").offsetHeight);
    }, [setAboutHeight])

    return (
        <div className="content-wrapper" id="about">
            <div className="about full-box bg-black">
                ABOUT
            </div>
        </div>
    )
}

export default About
