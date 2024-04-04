import React, { useRef } from "react";
import { useStaticQuery, graphql } from "gatsby";
import Header from "../Header/header";
import "./layout.css";
import { ScrollProvider } from "../../contexts/ScrollContext";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleAndBackgroundQuery {
      site {
        siteMetadata {
          title
        }
      }
      backgroundImage: file(relativePath: { eq: "gradient-background.jpg" }) {
        publicURL
      }
    }
  `);

  const mainDivRef = useRef(null);

  // Example usage of backgroundImage's publicURL in an inline style for background
  const mainDivStyle = {
    backgroundImage: `url(${data.backgroundImage.publicURL})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  };

  return (
    <ScrollProvider>
      <div style={mainDivStyle}>
        <div ref={mainDivRef} className={'mainDiv'} >
          <Header siteTitle={data.site.siteMetadata?.title || `Title`} scrollContainerRef={mainDivRef} />
          <div className={'innerDiv'}>
            <main>{children}</main>
          </div>
        </div>
      </div>
    </ScrollProvider>
  );
};

export default Layout;
