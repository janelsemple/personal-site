import * as React from "react"
import {skillsItems, languagesItems} from "../../../data/data"

const Skills = () => {
  return (
    <div className="skills">
      <h1>Skills</h1>
        {skillsItems.skills.map((skill, index) => (
          <span> {skill} &middot;</span>
        ))}
      <h1>Languages</h1>
        {languagesItems.languages.map((language, index) => (
          <span> {language} &middot; </span>
        ))}
    </div>
  )
}

export default Skills;