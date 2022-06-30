import Tooltip from '@mui/material/Tooltip';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ListAltIcon from '@mui/icons-material/ListAlt';
import Fade from '@mui/material/Fade';

.contactsList {
  margin: auto 0;
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-direction: row;
}

<ul className="contactsList">
          <li>
            <a href="https://twitter.com/simb_erella">
              <Tooltip
                title="Twitter"
                placement="top"
                TransitionComponent={Fade}
                TransitionProps={{ timeout: 600 }}
              >
                <TwitterIcon />
              </Tooltip>
            </a>
          </li>
          <li>
            <a href="https://github.com/SimbaWANGU">
              <Tooltip
                title="Github"
                placement="top"
                TransitionComponent={Fade}
                TransitionProps={{ timeout: 600 }}
              >
                <GitHubIcon />
              </Tooltip>
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/in/simba-wangulu/">
              <Tooltip
                title="LinkedIn"
                placement="top"
                TransitionComponent={Fade}
                TransitionProps={{ timeout: 600 }}
              >
                <LinkedInIcon />
              </Tooltip>
            </a>
          </li>
          <li>
            <a href="https://docs.google.com/document/d/19ND9A9yW8Osz6TcR5muYF3BH1KzVT4JbTORv5y04q6M/edit?usp=sharing">
              <Tooltip
                title="Resume"
                placement="top"
                TransitionComponent={Fade}
                TransitionProps={{ timeout: 600 }}
              >
                <ListAltIcon />
              </Tooltip>
            </a>
          </li>
        </ul>