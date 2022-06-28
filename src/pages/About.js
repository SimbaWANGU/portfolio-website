/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
import React from 'react';
import '../styles/about.scss';
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
    <div className="aboutMe">
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
    </div>
  );
}

export default About;
