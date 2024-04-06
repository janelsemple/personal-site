import React, { useState, useEffect } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { infoDiv, imgContainer } from './home.module.css';
import Links from '../Links/links';
import Navbar from "../Navigation/navigation";

const Home = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "janel.jpg" }) { 
        publicURL
      }
    }
  `);

  useEffect(() => {
    setShowNavbar(window.innerWidth > 1025);
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
        {/* Update the src attribute to use the queried image URL */}
        <img className={"circle"} src={data.file.publicURL} alt={'Janel'} />
      </div>
      {showNavbar && <Navbar />}
    </div>
  );
};

export default Home;
