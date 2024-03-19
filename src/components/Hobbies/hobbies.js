import * as React from "react"
import { hobbiesItems } from '../../data/data.js'
const Hobbies = () => {
  return(
    <div className={"flexRow"}>
        {hobbiesItems.hobbies.map((hobby, index) => (
            <div className={"contentDiv"}>
          <div key={index}>
          <h2>{hobby.title}</h2>
          <p>{hobby.description}</p>
          <img src={hobby.imageSrc} alt={hobby.title} />
          </div>

            </div>
        ))}
    </div>
  )
}

export default Hobbies;