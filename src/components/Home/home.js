import React, { useState, useEffect } from "react";
import image from '../../images/janel.jpg';
import { infoDiv, imgContainer } from './home.module.css';
import Links from '../Links/links';
import Navbar from "../Navigation/navigation";

const Home = () => {
  const [showNavbar, setShowNavbar] = useState(window.innerWidth > 1025);

  // Add event listener using useEffect to determine if the navbar should be shown
  useEffect(() => {
    const handleResize = () => {
      setShowNavbar(window.innerWidth > 1025);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={infoDiv}>
      <div>
        <h1>Janel Semple</h1>
        <h3>Software Developer</h3>
        <Links />
      </div>
      <div className={imgContainer}>
        <img className={"circle"} src={image} alt={'Janel'} />
      </div>
      {showNavbar && <Navbar />}
    </div>
  );
};

export default Home;
