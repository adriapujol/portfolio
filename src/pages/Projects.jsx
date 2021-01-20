import React, { useEffect } from 'react';

const Projects = ({setProjectsHeight}) => {

    useEffect(() => {
        setProjectsHeight(document.getElementById("projects").offsetHeight);
    }, [setProjectsHeight])

    return (
        <div className="content-wrapper" id="projects">
            <div className="projects full-box bg-yellow">
               THIS PROJECTSSSSS
            </div>
        </div>
    )
}

export default Projects
