import * as React from "react"
import { Spotify } from "react-spotify-embed"
import {aboutItem} from "../../data/data.js"
import {ScrollContext} from "../../contexts/ScrollContext"
const About = () => {
  const {about} = React.useContext(ScrollContext);
  return(
    <div ref={about} id='about' className={"spaceEvenly"}>
      <div className={"contentDiv"}>
        <h1>About</h1>
        <hr />
        <p>
          {aboutItem.description}
        </p>
      </div>
    </div>
  )
}

export default About;