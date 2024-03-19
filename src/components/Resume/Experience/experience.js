import * as React from 'react';
import {experienceItems} from '../../../data/data.js'
const Experience = () => {
return (
  <div className={"contentDiv"}>
    <h1>Experience</h1>
    <div className={"flexRow"}>
    {experienceItems.experience.map((item, index) => (
      <div key={index}>
        <h2>{item.workplace} - {item.location}</h2>
        <h3>{item.title}</h3>
        <p>{item.date}</p>
        <ul>
          {item.experience.map((exp, expIndex) => (
            <li key={expIndex}>{exp}</li>
          ))}
        </ul>
      </div>
    ))}
    </div>
  </div>
)
}

export default Experience;