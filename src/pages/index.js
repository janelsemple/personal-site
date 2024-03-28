import * as React from "react"

import Layout from "../components/Layout/layout"
import Seo from "../components/seo/seo"
import '../../global.css';
import Home from "../components/Home/home"
import Resume from "../components/Resume/resume"
import Skills from "../components/Resume/Skills/skills"
import About from "../components/About/about"
import { homeDiv, growDiv, mainDiv } from './index.module.css'

const IndexPage = () => (
  <Layout>
    <div className={mainDiv}>
    <div className={homeDiv}>
      <Home />
    </div>
    <div className={growDiv}>
      <About />

      <Skills />
      <Resume />
    </div>
    </div>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Janel Semple" />

export default IndexPage
