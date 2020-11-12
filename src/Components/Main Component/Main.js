import React from 'react'
import '../Projects Section Component/ProjectSection';
import ProjectsSection from '../Projects Section Component/ProjectSection';
import '../Skills Section Component/SkillsSection';
import SkillsSection from '../Skills Section Component/SkillsSection';



function Main() {
    return (
        <div className="main">
              <ProjectsSection/>
              <SkillsSection/>  
        </div>
    )
}
export default Main