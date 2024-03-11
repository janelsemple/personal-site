import * as React from "react"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import {iconSize} from './links.module.css';
const Links = () => (
  <div className={iconSize}>
    <a href="https://github.com/janelsemple" target="_blank" rel="noopener noreferrer">
      <GitHubIcon iconStyle={{fontSize:'large'}} />
    </a>
    <a href="https://www.linkedin.com/in/janelsemple/" target="_blank" rel="noopener noreferrer">
      <LinkedInIcon />
    </a>
  </div>
)

export default Links
