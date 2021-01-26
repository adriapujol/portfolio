import React from 'react';
import './ProjectCard.scss';

const ProjectCard = ({ title, desc, code, web, img }) => {
    return (
        <div className="project-card">
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
