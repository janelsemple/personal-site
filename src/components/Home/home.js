import * as React from "react"
import image from '../../images/janel.jpg'
import {infoDiv, imgContainer} from './home.module.css'
const Home = () => {
  return(
    <div className={infoDiv}>
        <div>
          <h1>Janel Semple</h1>
          <h3>Software Developer</h3>
        </div>
        <div className={imgContainer}>
          <img src={image} alt={'Janel'} />
        </div>
        <p>// INSERT LINK BUTTONS HERE</p>
    </div>
  )
}

export default Home;