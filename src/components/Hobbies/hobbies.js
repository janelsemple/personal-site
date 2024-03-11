import * as React from "react"
import { hobbiesItems } from '../../data/data.js'
const Hobbies = () => {
  return(
    <div className={"contentDiv"}>
      <h1>Hobbies</h1>
      <ul>
        {hobbiesItems.hobbies.map((hobby, index) => (
          <div key={index}>
          <h2>{hobby.title}</h2>
          <p>{hobby.description}</p>
          <img src={hobby.imageSrc} alt={hobby.title} />
          </div>
        ))}
      </ul>
    </div>

  )
}

export default Hobbies;