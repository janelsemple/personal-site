import * as React from "react"
import Education from "./Education/education"
import Experience from "./Experience/experience"
import Projects from "./Projects/projects"
import CourseWork from "./Coursework/coursework"
const Resume = () => {
  return(
      <div >
          <Education />
          <Experience />
          <Projects />
      </div>
  )
}

export default Resume;