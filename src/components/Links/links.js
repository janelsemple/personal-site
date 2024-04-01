import * as React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import {icon} from './links.module.css';
const Links = () => (
  <div className={'center'}>
    <a href="https://github.com/janelsemple" title="Github" target="_blank" rel="noopener noreferrer">
      <GitHubIcon className={icon}  />
    </a>
    <a href="https://www.linkedin.com/in/janelsemple/" title="LinkedIn" target="_blank" rel="noopener noreferrer">
      <LinkedInIcon className={icon} />
    </a>
    <a
      onClick={() => window.location.href = "mailto:janelsemple@gmail.com?subject=Hello"}
      role="button"
      tabIndex={0}
      onKeyPress={() => window.location.href = "mailto:janelsemple@gmail.com?subject=Hello"}
      style={{ display: 'inline-flex', alignItems: 'center', cursor: 'pointer' }}
      aria-label="send email"
      title="Send Email"
    >
      <EmailIcon className={icon} />
    </a>
  </div>
);

export default Links;
