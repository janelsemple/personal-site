import React, { useContext } from 'react';
import { ScrollContext } from '../../contexts/ScrollContext';
import * as styles from './navigation.module.css';
import useScrollSpy from "../../hooks/useNavBar";

const Navbar = () => {
  const { about, experience, projects, scrollToRef } = useContext(ScrollContext);
  const activeId = useScrollSpy(['about', 'experience', 'projects'], { threshold: 0.40 });

  return (
    <div className={styles.navBar}>
      <span
        className={activeId === 'about' ? styles.navLinkActive : styles.navLink}
        onClick={() => scrollToRef(about)}
      >
        About
      </span>
      &middot;
      <span
        className={activeId === 'experience' ? styles.navLinkActive : styles.navLink}
        onClick={() => scrollToRef(experience)}
      >
        Experience
      </span>
      &middot;
      <span
        className={activeId === 'projects' ? styles.navLinkActive : styles.navLink}
        onClick={() => scrollToRef(projects)}
      >
        Projects
      </span>
    </div>
  );
};

export default Navbar;
