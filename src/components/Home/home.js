import * as React from "react"
import image from '../../images/janel.jpg'
import './home.module.css'
const Home = ({ isHidden }) => {

  return(
    <div>
      <h1>Janel Is Awesome!</h1>
      <img src={image} alt={'Janel'}/>
    </div>
  )
}

export default Home;