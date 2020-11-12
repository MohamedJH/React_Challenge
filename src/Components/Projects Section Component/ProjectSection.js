
import React from 'react'
import './ProjectSection.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode,faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import  Css_project from '../images/css.png'
import  Express_project from '../images/Expressjs.png'
import  Mongodb_project from '../images/mongodb.svg'
import  Html_project from '../images/html.png'

const projects =[
    {
        projectTitle:"CSS project",
        image: Css_project,
        description:"Skills used css+html+bootstrap"
    },
    {
        projectTitle:"Express project",
        image: Express_project ,
        description:"Skills used css+html+bootstrap+js"
    },
    {
        projectTitle:"React project",
        image:Mongodb_project,
        description:"Skills used css+html+bootstrap+React"
    },
    {
        projectTitle:"Html project",
        image: Html_project,
        description:"Skills used css+html+bootstrap"
    },
    {
        projectTitle:"Html project",
        image: Html_project,
        description:"Skills used css+html+bootstrap"
    }
]
    

const ProjectCard =({project:{projectTitle,image,description}})=>{
    return(
        <div className="ProjectCard">
            <img className="ProjectImage" src={image} alt=""/>
            <div className="projectTitle">
                <h5>{projectTitle}</h5> 
                <small>{description}</small>
            </div>
            <div className="learn_more">
                 <p><b>Learn more</b></p>
                 <FontAwesomeIcon icon={faArrowAltCircleRight} size="lg"/>
            </div>
        </div>
    )
}

const ProjectsSection = ()=>{
    return (
        <div id="projects"className="DarkSection">
            <div className="ClairTitle">
                <FontAwesomeIcon icon={faLaptopCode}/>
                <b> my  <span>&thinsp;Projects &thinsp; </span></b>
            </div>
            <div id="ProjectsCards">
                {
                    projects.map((project,i)=>{
                        return <ProjectCard project={project}/>
                    })
                }
            </div>
        </div>
    )
}

export default ProjectsSection 