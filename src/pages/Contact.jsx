import React, { useState } from 'react';
import ContactUs from '../components/contact/ContactUs';
import face from '../img/face-bye.png';
import barf from '../img/barf.png';
import './Contact.scss';


const Contact = () => {

    const [showBarf, setShowBarf] = useState(false);

    const toggleBarf = () => {
        setShowBarf(showBarf => !showBarf);
    }

    return (
        <div className="full-box bg-black" id="contact">
            <div className="contact">
                <div className="contact-box">
                    <h1 className="section-title">Contact</h1>
                    <ContactUs />
                </div>
                <div className="social">
                    <h1 className="section-title">Social</h1>
                    <div className="social-icons">
                        <a href="https://github.com/adriapujol" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-github" />
                        </a>
                        <a href="https://www.linkedin.com/in/adriapujol/" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="https://www.instagram.com/adrienhill/" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </div>
                    <div className="social-text">You can also find me here</div>
                    <div className="thanks" onClick={toggleBarf}>
                        <img src={barf} alt="Thanks" className={showBarf ? "barf show-barf" : "barf"} />
                        {/* <img src={barf} alt="thanks for visiting" /> */}
                        <img src={face} alt="face" className="face" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;
