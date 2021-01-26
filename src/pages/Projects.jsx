import React from 'react';
import './Projects.scss';
import ProjectCard from '../components/projectCard/ProjectCard';
import projectOne from '../img/project1.jpg';
import projectTwo from '../img/project2.jpg';

const Projects = () => {

    const title = "Gym Log";
    const desc = "Web app that helps you track your progress in the gym. Lets you create workouts, exercises and save your lifts. Created with React, it uses Firebase authentication and Firestore as backend.";
    const code = "https://github.com/adriapujol/fit_log";
    const web = "https://adriapujol.github.io/fit_log/";

    const title2 = "Norris Facts";
    const desc2 = "Need a Chuck Norris fact right now? This is your site.";

    const desc3 = "Need a Chuck Norris fact right now? This is your site.Need a Chuck Norris fact right now? This is your site.Need a Chuck Norris fact right now? This is your site.Need a Chuck Norris fact right now? This is your site.Need a Chuck Norris fact right now? This is your site.Need a Chuck Norris fact right now? This is your site.Need a Chuck Norris fact right now? This is your site.Need a Chuck Norris fact right now? This is your site.Need a Chuck Norris fact right now? This is your site.Need a Chuck Norris fact right now? This is your site.";


    return (
        <div className="no-full-box bg-yellow" id="projects">
            <div className="projects">
                <h1 className="section-title">Projects</h1>
                <div className="projects-grid">
                    <ProjectCard title={title} desc={desc} code={code} web={web} img={projectOne} />
                    <ProjectCard title={title2} desc={desc2} code={code} web={web} img={projectTwo} />
                    <ProjectCard title={title} desc={desc2} code={code} web={web} img={projectOne} />
                    <ProjectCard title={title} desc={desc} code={code} web={web} img={projectTwo} />
                </div>
            </div>
        </div>
    )
}

export default Projects
