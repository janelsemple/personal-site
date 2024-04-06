import * as React from "react"
import Education from "./Education/education"
import Experience from "./Experience/experience"
import Projects from "./Projects/projects"
import {resumeDiv} from "./resume.module.css"
const Resume = () => {
  return(
      <div className={resumeDiv}>
          <Education />
          <Experience />
          <Projects />
      </div>
  )
}

export default Resume;