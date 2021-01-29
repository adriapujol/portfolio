import React, { useLayoutEffect, useRef, useState } from 'react';
import './ProjectCard.scss';

const ProjectCard = ({ title, desc, code, web, img, pageHeight }) => {

    const [slideIn, setSlideIn] = useState(false);

    const cardRef = useRef();


    useLayoutEffect(() => {
        const handleScroll = () => {
            let elementTop;
            if (cardRef) {
                elementTop = cardRef.current.getBoundingClientRect().y;
            }

            if (elementTop < pageHeight - pageHeight * 0.5) {
                setSlideIn(true);
            }
        }
        window.addEventListener("scroll", handleScroll);
    }, [pageHeight])

    return (
        <div className={slideIn ? "project-card slide-in" : "project-card"} ref={cardRef}>
            <img src={img} alt={title} />
            <div className="card-body">
                <h3 className="card-title">{title}</h3>
                <div className="card-desc">{desc}</div>
            </div>
            <div className="card-links">
                <a href={code} target="_blank" className="card-code" rel="noopener noreferrer">
                    <i className="fas fa-code" />
                    Code
                </a>
                <a href={web} target="_blank" className="card-web" rel="noopener noreferrer">
                    <i className="fas fa-link" />
                    Link
                </a>
            </div>
        </div>
    )
}

export default ProjectCard;
