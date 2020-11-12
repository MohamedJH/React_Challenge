import React from 'react'
import './SkillsSection.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs } from '@fortawesome/free-solid-svg-icons';
import {faHtml5,faCss3Alt,faBootstrap,faJsSquare,faReact,faAngular,faNode,faUbuntu,faWindows,faRProject} from '@fortawesome/free-brands-svg-icons'

const Skills=[
    { 
        Progress:23,       
        Skill1:faHtml5,
        Skill2:faCss3Alt,
        Skill3:faBootstrap,
        description:""
        
    },
    { 
        Progress:18,       
        Skill1:faJsSquare,
        Skill2:faReact,
        Skill3:faAngular,
        description:""
       
    },
    { 
        Progress:50,       
        Skill1:faNode,
        description:""
       
    },
    { 
        Progress:75,       
        Skill1:faWindows,
        Skill2:faUbuntu,
        description:""
    },
    { 
        Progress:65,       
        Skill1:faRProject,
        description:""
        
    }
];
const SkillCard =({skill:{Progress,Skill1,Skill2,Skill3,description}})=>{
    return (
        <div className="CircleSkillCard">
            <div className="progress-circle" data-value={Progress}>
                <div className="progress-masque">
                    <div className="progress-barre"></div>
                    <div className="progress-sup50"></div>
                </div>
            </div>
            <div className="libele">
                <FontAwesomeIcon icon={Skill1} size="2x"/> &thinsp;&thinsp;
                <FontAwesomeIcon icon={Skill2} size="2x"/> &thinsp;&thinsp;
                <FontAwesomeIcon icon={Skill3} size="2x"/>  &thinsp;&thinsp;   
            </div>
            <div className="Description">
                <small>{description}</small>
            </div>
        </div>
    )
}




const SkillsSection=()=>{
    return (
        <div id="skills" className="ClairSection">
            <div className="DarkTitle">
                <FontAwesomeIcon icon={faCogs}/>
                <b> my  <span>&thinsp;SKILLS &thinsp; </span></b>
            </div>
            <div id="SkillsCards">
                {
                    Skills.map((skill,i)=>{
                        return <SkillCard  key={i} skill={skill}/>
                    })
                }

            </div>
        </div>
    )
}

export default SkillsSection 