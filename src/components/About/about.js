import * as React from "react"
import { Spotify } from "react-spotify-embed"
import {aboutItem} from "../../data/data.js"
const About = () => {
  return(
    <div className={"spaceEvenly"}>
      <div className={"contentDiv"}>
        <h1>About</h1>
        <hr />
        <p>
          {aboutItem.description}
        </p>
        <Spotify wide width={'500px'} link={"https://open.spotify.com/playlist/4YSGQ3pTppHtYl8woTx8Hh?si=c71b2aa674d04666"} />
      </div>
    </div>
  )
}

export default About;