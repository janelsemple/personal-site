import * as React from "react"
import {aboutItem} from "../../data/data.js"
import {ScrollContext} from "../../contexts/ScrollContext"
const About = () => {
  const {about} = React.useContext(ScrollContext);
  return(
      <div className={"contentDiv"}>
        <h1>About</h1>
        <hr />
        <p>
          {aboutItem.description}
        </p>
      </div>
  )
}

export default About;