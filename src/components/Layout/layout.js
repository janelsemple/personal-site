import React, { useRef } from "react";
import { useStaticQuery, graphql } from "gatsby";
import Header from "../Header/header";
import "./layout.css";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const mainDivRef = useRef(null); // Using useRef here

  return (
    <div ref={mainDivRef} className={'mainDiv'}>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} scrollContainerRef={mainDivRef} />
      <div className={'innerDiv'}>
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
