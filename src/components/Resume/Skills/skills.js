import * as React from "react"
import {skillsItems, languagesItems} from "../../../data/data"

const Skills = () => {
  return (
    <div className={"flexColumn"}>
      <div className={"contentDiv"}>
        <h1>Skills</h1>
        {skillsItems.skills.map((skill, index) => (
          <span key={index}> {skill} &middot;</span>
        ))}
      </div>
      <div className={"contentDiv"}>
      <h1>Languages</h1>
        {languagesItems.languages.map((language, index) => (
          <span key={index}> {language} &middot; </span>
        ))}
      </div>
    </div>
  )
}

export default Skills;