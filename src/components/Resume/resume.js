import * as React from "react"
import Education from "./Education/education"
import Experience from "./Experience/experience"
import Projects from "./Projects/projects"
import CourseWork from "./Coursework/coursework"
const Resume = () => {
  return(
      <div >
          <Experience />
          <Projects />
        <div className={"flexRow"}>
          <Education />
          <CourseWork />
        </div>

      </div>
  )
}

export default Resume;