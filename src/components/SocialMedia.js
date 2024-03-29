import React from 'react';
import Tooltip from '@mui/material/Tooltip';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ListAltIcon from '@mui/icons-material/ListAlt';
import Fade from '@mui/material/Fade';

function SocialMedia() {
  return (
    <ul className="contactsList">
      <li>
        <a
          href="https://twitter.com/simb_erella"
          target="_blank"
          rel="noreferrer"
        >
          <Tooltip
            title="Twitter"
            placement="top"
            TransitionComponent={Fade}
            TransitionProps={{ timeout: 600 }}
          >
            <TwitterIcon className="socialMediaIcons" />
          </Tooltip>
        </a>
      </li>
      <li>
        <a
          href="https://github.com/SimbaWANGU"
          target="_blank"
          rel="noreferrer"
        >
          <Tooltip
            title="Github"
            placement="top"
            TransitionComponent={Fade}
            TransitionProps={{ timeout: 600 }}
          >
            <GitHubIcon className="socialMediaIcons" />
          </Tooltip>
        </a>
      </li>
      <li>
        <a
          href="https://linkedin.com/in/simba-wangulu/"
          target="_blank"
          rel="noreferrer"
        >
          <Tooltip
            title="LinkedIn"
            placement="top"
            TransitionComponent={Fade}
            TransitionProps={{ timeout: 600 }}
          >
            <LinkedInIcon className="socialMediaIcons" />
          </Tooltip>
        </a>
      </li>
      <li>
        <a
          href="https://docs.google.com/document/d/19ND9A9yW8Osz6TcR5muYF3BH1KzVT4JbTORv5y04q6M/edit?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          <Tooltip
            title="Resume"
            placement="top"
            TransitionComponent={Fade}
            TransitionProps={{ timeout: 600 }}
          >
            <ListAltIcon className="socialMediaIcons" />
          </Tooltip>
        </a>
      </li>
    </ul>
  );
}

export default SocialMedia;
