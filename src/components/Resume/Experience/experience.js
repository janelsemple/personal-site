import * as React from 'react';
import {experienceItems} from '../../../data/data.js'
const Experience = () => {
return (
  <div className={"contentDiv"}>
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