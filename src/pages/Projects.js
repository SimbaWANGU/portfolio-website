import React from 'react';
import '../styles/projects.scss';
import ListSharpIcon from '@mui/icons-material/ListSharp';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import LinkIcon from '@mui/icons-material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';

function Projects() {
  return (
    <div className="projects animate">
      <div className="grid">
        <div className="container animate glow delay-1">
          <div className="card">
            <div className="imgBx">
              <SportsSoccerIcon className="projectIcon" style={{ color: '#ffffff' }} />
            </div>
            <div className="contentBx">
              <h2>Football Hub</h2>
              <div className="technology">
                <h3>Technology:</h3>
                <span>React</span>
                <span>Redux</span>
                <span>SCSS</span>
              </div>
              <div className="links">
                <a href="https://foot-y.herokuapp.com/">
                  <LinkIcon className="linkIcons" />
                </a>
                <a href="https://github.com/SimbaWANGU/capstone3">
                  <GitHubIcon className="linkIcons" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container animate glow delay-3">
          <div className="card">
            <div className="imgBx">
              <MenuBookIcon className="projectIcon" style={{ color: '#ffffff' }} />
            </div>
            <div className="contentBx">
              <h2>Bookstore</h2>
              <div className="technology">
                <h3>Technology:</h3>
                <span>React</span>
                <span>Redux</span>
                <span>SCSS</span>
              </div>
              <div className="links">
                <a href="https://bookstor-e.herokuapp.com/">
                  <LinkIcon className="linkIcons" />
                </a>
                <a href="https://github.com/SimbaWANGU/bookstore">
                  <GitHubIcon className="linkIcons" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container animate glow delay-5">
          <div className="card">
            <div className="imgBx">
              <TipsAndUpdatesIcon className="projectIcon" style={{ color: '#ffffff' }} />
            </div>
            <div className="contentBx">
              <h2>Kenyan Creatives</h2>
              <div className="technology">
                <h3>Technology:</h3>
                <span>HTML</span>
                <span>CSS</span>
                <span>JS</span>
              </div>
              <div className="links">
                <a href="https://simbawangu.github.io/Kenyan-Creative---Microverse-Capstone-Project/public/index.html">
                  <LinkIcon className="linkIcons" />
                </a>
                <a href="https://github.com/SimbaWANGU/Kenyan-Creative---Microverse-Capstone-Project">
                  <GitHubIcon className="linkIcons" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container animate glow delay-7">
          <div className="card">
            <div className="imgBx">
              <ListSharpIcon className="projectIcon" style={{ color: '#ffffff' }} />
            </div>
            <div className="contentBx">
              <h2>Todo List</h2>
              <div className="technology">
                <h3>Technology:</h3>
                <span>React</span>
                <span>SCSS</span>
                <span>JS</span>
              </div>
              <div className="links">
                <a href="https://t-odo.herokuapp.com/">
                  <LinkIcon className="linkIcons" />
                </a>
                <a href="https://github.com/SimbaWANGU/react-todo">
                  <GitHubIcon className="linkIcons" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
