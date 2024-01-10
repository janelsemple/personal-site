/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../Header/header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div style={{
        maxWidth: '900px',
        margin: `0 auto`,
        background: 'rgba(128, 128, 128, 0.3)',
        borderRadius: '15px',
        height: '100vh',
        padding: `var(--size-gutter)`,

      }}>
        <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
        <div
          style={{
            margin: `0 auto`,
            paddingTop: 'var(--size-gutter)',
            maxWidth: `var(--size-content)`,
          }}
        >
          <main>{children}</main>
        </div>
      </div>
    </>
  )
}

export default Layout
