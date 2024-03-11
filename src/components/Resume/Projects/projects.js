import * as React from "react"
import  {projectsItems} from "../../../data/data"
import GitHubIcon from "@mui/icons-material/GitHub"

const Projects = () => {
  return (
    <div>
      <h1>Projects</h1>
      {projectsItems.projects.map((item, index) => (
        <div key={index}>
          <h2>{item.title}</h2>
          <a href={item.link} target="_blank" rel="noopener noreferrer">
            <GitHubIcon iconStyle={{ fontSize: 'medium' }} />
          </a>
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