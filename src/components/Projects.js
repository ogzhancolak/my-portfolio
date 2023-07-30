import React from 'react'
import { useSelector } from 'react-redux';
import { ProjectUIText } from '../localHook/ProjectUIText';


const Projects = () => {
  const projectsData  = ProjectUIText();
  const UIText = useSelector((store)=> store.languageReducer);
  
  return (
  <section id="projects">
    <h1 id='projectMainHeaders'>{UIText.projects}</h1>
    <div id="projectSet" >
      {projectsData.map((item)=>
      <div id='projectBoxSet'>
        <div id='projectImg'>
          <img id="projectImg" src={item.img} alt={item.alt}/>
        </div>
        <h2 id='projectSubHeader'>{item.name}</h2>
        <p id='projectDefinition'>{item.definition}
        </p>
        <div id='skillsUsed'>
          <span id="uniqueSkill">{item.skill1}</span>
          <span id="uniqueSkill">{item.skill2}</span>
          <span id="uniqueSkill">{item.skill3}</span>
        </div>
        <div id='links'>
          <a id="projectsLink" href={item.githubLink} target="_blank" rel="noopener noreferrer">Github</a>
          <a id="projectsLink" href={item.websitelink} target="_blank" rel="noopener noreferrer">{item.website}</a>
        </div>
      </div>
      )}
    </div>  
  </section> 
  )
}

export default Projects
