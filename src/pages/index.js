import * as React from "react"

import Layout from "../components/Layout/layout"
import Seo from "../components/seo/seo"
import '../../global.css';
import Home from "../components/Home/home"


const IndexPage = () => (
  <Layout>
  <Home isHidden='false'/>
  </Layout>

)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Janel Semple" />

export default IndexPage
