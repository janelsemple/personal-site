import React from 'react';
import { useContext } from 'react';
import { ScrollContext }  from '../../contexts/ScrollContext';

const Navbar = () => {

  const { about, experience, projects, scrollToRef } = useContext(ScrollContext);

  return (
    <div>
      <span style={{ cursor: 'pointer'}} onClick={() => scrollToRef(about)}>
        About
      </span>
      &middot;
      <span style={{ cursor: 'pointer'}} onClick={() => scrollToRef(experience)}>
        Experience
      </span>
      &middot;
      <span style={{ cursor: 'pointer'}} onClick={() => scrollToRef(projects)}>
        Projects
      </span>
    </div>
  );
};

export default Navbar;
