import * as React from "react"
import Education from "./Education/education"
import Experience from "./Experience/experience"
import Projects from "./Projects/projects"
import Skills from "./Skills/skills"
import {resumeDiv} from './resume.module.css'
const Resume = () => {
  return(

      <div className={"contentDiv"}>
        <div className={resumeDiv}>
          <Projects />
        </div>
        <div className={resumeDiv}>
          <Education />
          <Experience />
        </div>
        <div className={resumeDiv}>
          <Skills />
        </div>
      </div>

  )
}

export default Resume;