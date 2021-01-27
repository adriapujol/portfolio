import React, { useLayoutEffect, useRef, useState, useEffect } from 'react';
import './ProjectCard.scss';

const ProjectCard = ({ title, desc, code, web, img, pageHeight }) => {

    const [slideIn, setSlideIn] = useState(false);

    const cardRef = useRef();

    const handleScroll = () => {
        let elementTop;
        if(cardRef) {
            elementTop= cardRef.current.getBoundingClientRect().y;
        }

        if (elementTop < pageHeight - pageHeight*0.5) {
            setSlideIn(true);
        }
    }

    useLayoutEffect(() => {
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
                <a href={code} target="_blank" className="card-code" rel="noopener noreferrer">code</a>
                <a href={web} target="_blank" className="card-web" rel="noopener noreferrer">link</a>
            </div>
        </div>
    )
}

export default ProjectCard;
