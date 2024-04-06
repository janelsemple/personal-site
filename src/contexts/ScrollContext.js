import React, { createContext, useRef, useState} from 'react';

export const ScrollContext = createContext(undefined);

export const ScrollProvider = ({ children }) => {
  const about = useRef(null);
  const experience = useRef(null);
  const projects = useRef(null);
  const [currentView, setCurrentView] = useState('');

  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  }


  return (
    <ScrollContext.Provider value={{ about, experience, projects, scrollToRef, currentView }}>
      {children}
    </ScrollContext.Provider>
  );
};
