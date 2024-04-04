import * as React from "react"
import {skillsItems, languagesItems} from "../../../data/data";
import {skillTag, skillDiv} from '../resume.module.css';
const Skills = () => {
  return (
    <div className={skillDiv}>
      <div className={"contentDiv"}>
        <h1>Skills</h1>
        <hr/>
        {skillsItems.skills.map((skill, index) => (
          <span className={skillTag} key={index}> {skill} </span>
        ))}
      </div>
      <div className={"contentDiv"}>
        <h1>Languages</h1>
        <hr />
        {languagesItems.languages.map((language, index) => (
          <span className={skillTag} key={index}> {language} </span>
        ))}
      </div>
    </div>
  )
}

export default Skills;