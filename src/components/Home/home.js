import * as React from "react"
import image from '../../images/janel.jpg'
import {infoDiv, imgContainer} from './home.module.css'
import Links from '../Links/links'
const Home = () => {
  return(
    <div className={infoDiv}>
        <div >
          <h1>Janel Semple</h1>
          <h3>Software Developer</h3>
          <Links />
        </div>
        <div className={imgContainer}>
          <img src={image} alt={'Janel'} />
        </div>
    </div>
  )
}

export default Home;