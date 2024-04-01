// Header.js
import React from "react";
import { inner, header, headerVisible } from "./header.module.css";
import NavBar from "../Navigation/navigation";
import useScrollVisibility from "../../hooks/useHeader";

const Header = ({ scrollContainerRef }) => {
  const showHeader = useScrollVisibility(scrollContainerRef);

  return (
    <>
      <header className={`${header} ${showHeader ? headerVisible : ''}`}>
        <div className={inner}>
          <div>
            JS
          </div>
          <div>
            <NavBar />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
