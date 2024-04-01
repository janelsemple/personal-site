import * as React from 'react';
import {experienceItems} from '../../../data/data.js'
import {ScrollContext} from "../../../contexts/ScrollContext"
import { useContext } from "react"

const Experience = () => {
  const {experience} = useContext(ScrollContext);

return (
  <div ref={experience} id='experience' className={"contentDiv"}>
    <h1>Experience</h1>
    <hr/>
    {experienceItems.experience.map((item, index) => (
      <div className= {'marginBottom'} key={index}>
        <h2>{item.workplace} - {item.location}</h2>
        <h3>{item.title}</h3>
        <h4>{item.date}</h4>
        <ul>
          {item.experience.map((exp, expIndex) => (
            <li key={expIndex}>{exp}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>
)
}

export default Experience;