import React from 'react';
import { useContext } from 'react';
import { ScrollContext } from '../../contexts/ScrollContext';
import { navBarBig, activeLink } from './navigation.module.css';
import useScrollSpy from "../../hooks/useNavBar"

const Navbar = () => {
  const { about, experience, projects, scrollToRef} = useContext(ScrollContext);
  const activeId = useScrollSpy(['about', 'experience', 'projects'], { threshold: 0.5 });

  return (
    <div className={navBarBig}>
      <span
        style={{ cursor: 'pointer', fontWeight: activeId === 'about' ? 'bold' : 'normal' }}
        onClick={() => scrollToRef(about)}
      >
        About
      </span>
      &middot;
      <span
        style={{ cursor: 'pointer', fontWeight: activeId === 'experience' ? 'bold' : 'normal' }}
        onClick={() => scrollToRef(experience)}
      >
        Experience
      </span>
      &middot;
      <span
        style={{ cursor: 'pointer', fontWeight: activeId === 'projects' ? 'bold' : 'normal' }}
        onClick={() => scrollToRef(projects)}
      >
        Projects
      </span>
    </div>
  );
};

export default Navbar;
