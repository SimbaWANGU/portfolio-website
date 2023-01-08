import React from 'react';
import '../styles/projects.scss';
import ListSharpIcon from '@mui/icons-material/ListSharp';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import LinkIcon from '@mui/icons-material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';

function Projects() {
  return (
    <div className="projects animate">
      <div className="grid">
        <div className="container animate glow delay-1">
          <div className="card">
            <div className="imgBx">
              <RestaurantIcon className="projectIcon" style={{ color: '#ffffff' }} />
            </div>
            <div className="contentBx">
              <h2>Gericht Restaurant</h2>
              <div className="technology">
                <h3>Technology:</h3>
                <span>React</span>
                <span>TS</span>
                <span>SCSS</span>
              </div>
              <div className="links">
                <a
                  href="https://restaurant-app-zeta-eight.vercel.app/"
                  target="_blank"
                >
                  <LinkIcon className="linkIcons" />
                </a>
                <a
                  href="https://github.com/SimbaWANGU/restaurant-app"
                  target="_blank"
                >
                  <GitHubIcon className="linkIcons" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container animate glow delay-3">
          <div className="card">
            <div className="imgBx">
              <RocketLaunchIcon className="projectIcon" style={{ color: '#ffffff' }} />
            </div>
            <div className="contentBx">
              <h2>Space Travellers Hub</h2>
              <div className="technology">
                <h3>Technology:</h3>
                <span>React</span>
                <span>Redux</span>
                <span>SCSS</span>
              </div>
              <div className="links">
                <a
                  href="https://space-travelling.netlify.app/"
                  target="_blank"
                >
                  <LinkIcon className="linkIcons" />
                </a>
                <a
                  href="https://github.com/SimbaWANGU/space-travelers-hub"
                  target="_blank"
                >
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
                <a
                  href="https://simbawangu.github.io/Kenyan-Creative---Microverse-Capstone-Project/public/index.html"
                  target="_blank"
                >
                  <LinkIcon className="linkIcons" />
                </a>
                <a
                  href="https://github.com/SimbaWANGU/Kenyan-Creative---Microverse-Capstone-Project"
                  target="_blank"
                >
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
                <span>JS</span>
                <span>HTML</span>
                <span>CSS</span>
              </div>
              <div className="links">
                <a
                  href="https://simbawangu.github.io/To-Do-List/"
                  target="_blank"
                >
                  <LinkIcon className="linkIcons" />
                </a>
                <a
                  href="https://github.com/SimbaWANGU/To-Do-List"
                  target="_blank"
                >
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
