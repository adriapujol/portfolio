import React, { useEffect } from 'react';
import './Projects.scss';
import ProjectCard from '../components/projectCard/ProjectCard';
import projectOne from '../img/project1.jpg';

const Projects = ({ setProjectsHeight }) => {

    const title = "Gym Log";
    const desc = "Web app that helps you track your progress in the gym. Lets you create workouts, exercises and save your lifts. Created with React, it uses Firebase authentication and Firestore as backend.";
    const code = "https://github.com/adriapujol/fit_log";
    const web = "https://adriapujol.github.io/fit_log/";

    useEffect(() => {
        setProjectsHeight(document.getElementById("projects").offsetHeight);
    }, [setProjectsHeight])

    return (
        <div className="content-wrapper" id="projects">
            <div className="full-box bg-yellow">
                <div className="projects">
                    <h1 className="section-title">Projects</h1>
                    <div className="projects-grid">
                        <ProjectCard title={title} desc={desc} code={code} web={web} img={projectOne} />
                        <ProjectCard title={title} desc={desc} code={code} web={web} img={projectOne} />
                        <ProjectCard title={title} desc={desc} code={code} web={web} img={projectOne} />
                        <ProjectCard title={title} desc={desc} code={code} web={web} img={projectOne} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
