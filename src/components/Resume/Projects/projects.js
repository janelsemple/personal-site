import * as React from "react"
import  {projectsItems} from "../../../data/data"
import GitHubIcon from "@mui/icons-material/GitHub"
import {smallSvg} from '../resume.module.css'
import {ScrollContext} from "../../../contexts/ScrollContext"
const Projects = () => {
  const {projects} = React.useContext(ScrollContext);
  return (
    <div ref={projects} id='projects' className={"contentDiv"}>
      <h1>Projects</h1>
      <hr />
      {projectsItems.projects.map((item, index) => (
        <div key={index}>
          <div className={"flexRow"}>
            <h2>{item.title}</h2>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <GitHubIcon className={smallSvg} />
            </a>
          </div>
          <ul>
            {item.description.map((desc, descIndex) => (
              <li key={descIndex}>{desc}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default Projects;