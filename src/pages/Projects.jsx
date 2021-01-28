import React, { useState, useEffect, useRef } from 'react';
import './Projects.scss';
import ProjectCard from '../components/projectCard/ProjectCard';
import imgOne from '../img/project1.jpg';
import imgTwo from '../img/project2.jpg';
import imgThree from '../img/project3.jpg';
import imgFour from '../img/project4.jpg';
import projectInfo from '../projects.json';

const Projects = () => {

    const [pageHeight, setPageHeight] = useState();
    const heightRef = useRef();

    useEffect(() => {
        setPageHeight(heightRef.current.offsetTop);
    }, [setPageHeight])

    const projectImg = [imgOne, imgTwo, imgThree, imgFour];
    const projectText = [...projectInfo];
    const projectList = projectText.map((proj, index) => {
        return { ...proj, img: projectImg[index] };
    })

    return (

        <div className="no-full-box bg-yellow" id="projects" ref={heightRef}>
            <div className="projects">
                <h1 className="section-title">Projects</h1>
                <div className="projects-grid">
                    {
                        projectList.map(({ title, description, code, web, img }, i) => {
                            return <ProjectCard key={i} title={title} desc={description} code={code} web={web} img={img} pageHeight={pageHeight} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Projects
