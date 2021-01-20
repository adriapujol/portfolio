import React from 'react';
import './ProjectCard.scss';

const ProjectCard = ({ title, desc, code, web, img }) => {
    return (
        <div className="project-card">
            <img src={img} alt={title} />
            <div className="card-body">
                <h3 className="card-title">{title}</h3>
                <div className="card-desc">{desc}</div>
                <div className="card-links">
                    <a href={code} className="card-code">code</a>
                    <a href={web} className="card-web">link</a>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;
