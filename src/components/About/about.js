import * as React from "react"
import { Spotify } from "react-spotify-embed"
const About = () => {
  return(
    <div className={"spaceEvenly"}>
      <div className={"contentDiv"}>
        <h1>About</h1>
        <p>
          Hello, and welcome to my site! In 2021 I had had enough of serving tables, and decided to take a
          leap of faith and go back to school. Two years later, I have achieved my diploma in Information Technology
          with a major in software development from The Southern Alberta Institute of Technology. I am now looking for
          a job in the IT industry, and I am excited to see where my new career will take me. I love to learn about
          all
          things tech, and I am always looking for new ways to challenge myself.
        </p>
        <Spotify wide link={"https://open.spotify.com/playlist/4YSGQ3pTppHtYl8woTx8Hh?si=c71b2aa674d04666"} width={400}/>
      </div>
    </div>
  )
}

export default About;