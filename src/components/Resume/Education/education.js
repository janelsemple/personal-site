import * as React from "react"
import { educationItem } from '../../../data/data.js'

const Education = () => {
  return (
    <div className={"contentDiv"}>
      <h1>Education</h1>
        <h3>{educationItem.degree}</h3>
        <h4>{educationItem.institution}</h4>
        <p>{educationItem.date}</p>
        <p>{educationItem.location}</p>
        <p>GPA {educationItem.GPA}</p>
    </div>
  )
}

export default Education;