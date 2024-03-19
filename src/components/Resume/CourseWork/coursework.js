import React from 'react'
import {courseWorkItems} from '../../../data/data'
const Coursework = () => {
  return (
    <div className={"contentDiv"}>
      <h1>Coursework</h1>
      <ul>
        {courseWorkItems.courseWork.map((course, index) => (
          <li key={index}>{course}</li>
        ))}
      </ul>
    </div>
  )
}

export default Coursework;