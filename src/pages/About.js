/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
import React from 'react';
import '../styles/about.scss';
import Tooltip from '@mui/material/Tooltip';
import Fade from '@mui/material/Fade';
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import Tailwind from '../assets/tailwind.png';
import Bootstrap from '../assets/bootstrap.png';
import Sass from '../assets/sass.png';
import JavaScript from '../assets/java-script.png';
import Ruby from '../assets/diamond.png';
import Git from '../assets/git.png';
import GitHub from '../assets/github.png';
import ReactIcon from '../assets/react.png';
import ROR from '../assets/ror.png';
import SQLIcon from '../assets/sql.png';
import Redux from '../assets/redux.png';
import VScode from '../assets/vscode.png';

function About() {
  return (
    <div className="aboutMe animate">
      <div className="aboutMeContent">
        <h1>About Me</h1>
        <ul>
          <li>
            <p>
              I am currently a student at Microverse. This is a fully remote school that trains web developers through collaboration.
            </p>
          </li>
          <li>
            <p>
              I have currently completed 3 modules that are the following:
            </p>
          </li>
          <li>
            <p>
              - HTML/CSS
              <br />
              - JavaScript
              <br />
              - React/ Redux
              <br />
            </p>
          </li>
          <li>
            <p>
              I enjoy the process of building software, from discovering and understanding an existing problem to crafting and developing a solution.
            </p>
          </li>
          <li>
            <p>
              I am currently searching for my next role and I'm open to new opportunities
            </p>
          </li>
        </ul>
      </div>
      <div className="techStack">
        <div className="div1 animate glow delay-1">
          <Tooltip
            title="HTML"
            placement="top"
            TransitionComponent={Fade}
            TransitionProps={{ timeout: 600 }}
          >
            <img src={HTML} alt="HTML" />
          </Tooltip>
        </div>
        <div className="div2 animate glow delay-2">
          <Tooltip
            title="CSS"
            placement="top"
            TransitionComponent={Fade}
            TransitionProps={{ timeout: 600 }}
          >
            <img src={CSS} alt="CSS" />
          </Tooltip>
        </div>
        <div className="div3 animate glow delay-3">
          <Tooltip
            title="Bootstrap"
            placement="top"
            TransitionComponent={Fade}
            TransitionProps={{ timeout: 600 }}
          >
            <img src={Bootstrap} alt="Bootstrap" />
          </Tooltip>
        </div>
        <div className="div4 animate glow delay-4">
          <Tooltip
            title="Tailwind"
            placement="top"
            TransitionComponent={Fade}
            TransitionProps={{ timeout: 600 }}
          >
            <img src={Tailwind} alt="Tailwind" />
          </Tooltip>
        </div>
        <div className="div5 animate glow delay-5">
          <Tooltip
            title="Sass"
            placement="top"
            TransitionComponent={Fade}
            TransitionProps={{ timeout: 600 }}
          >
            <img src={Sass} alt="Sass" />
          </Tooltip>
        </div>
        <div className="div6 animate glow delay-6">
          <Tooltip
            title="JavaScript"
            placement="top"
            TransitionComponent={Fade}
            TransitionProps={{ timeout: 600 }}
          >
            <img src={JavaScript} alt="JavaScript" />
          </Tooltip>
        </div>
        <div className="div7 animate glow delay-7">
          <Tooltip
            title="React"
            placement="top"
            TransitionComponent={Fade}
            TransitionProps={{ timeout: 600 }}
          >
            <img src={ReactIcon} alt="React" />
          </Tooltip>
        </div>
        <div className="div8 animate glow delay-8">
          <Tooltip
            title="Redux"
            placement="top"
            TransitionComponent={Fade}
            TransitionProps={{ timeout: 600 }}
          >
            <img src={Redux} alt="Redux" />
          </Tooltip>
        </div>
        <div className="div9 animate glow delay-9">
          <Tooltip
            title="Ruby"
            placement="top"
            TransitionComponent={Fade}
            TransitionProps={{ timeout: 600 }}
          >
            <img src={Ruby} alt="Ruby" />
          </Tooltip>
        </div>
        <div className="div10 animate glow delay-10">
          <Tooltip
            title="Ruby on Rails"
            placement="top"
            TransitionComponent={Fade}
            TransitionProps={{ timeout: 600 }}
          >
            <img src={ROR} alt="Ruby on Rails" />
          </Tooltip>
        </div>
        <div className="div11 animate glow delay-11">
          <Tooltip
            title="SQL"
            placement="top"
            TransitionComponent={Fade}
            TransitionProps={{ timeout: 600 }}
          >
            <img src={SQLIcon} alt="SQL" />
          </Tooltip>
        </div>
        <div className="div12 animate glow delay-12">
          <Tooltip
            title="Resume"
            placement="top"
            TransitionComponent={Fade}
            TransitionProps={{ timeout: 600 }}
          >
            <img src={Git} alt="Git" />
          </Tooltip>
        </div>
        <div className="div13 animate glow delay-13">
          <Tooltip
            title="Github"
            placement="top"
            TransitionComponent={Fade}
            TransitionProps={{ timeout: 600 }}
          >
            <img src={GitHub} alt="Github" />
          </Tooltip>
        </div>
        <div className="div14 animate glow delay-14">
          <Tooltip
            title="Visual Studio"
            placement="top"
            TransitionComponent={Fade}
            TransitionProps={{ timeout: 600 }}
          >
            <img src={VScode} alt="Visual Studio" />
          </Tooltip>
        </div>
        <div className="div15 animate glow delay-15" />
      </div>
    </div>
  );
}

export default About;
