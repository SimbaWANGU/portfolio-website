import React from 'react';
import '../styles/projects.scss';
import ListSharpIcon from '@mui/icons-material/ListSharp';
import LinkIcon from '@mui/icons-material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';

function Projects() {
  return (
    <div className="projects">
      <div className="grid">
        <div className="container animate">
          <div className="card">
            <div className="imgBx">
              <ListSharpIcon className="projectIcon" style={{ color: '#ffffff' }} />
            </div>
            <div className="contentBx">
              <h2>Todo List</h2>
              <div className="technology">
                <h3>Technology:</h3>
                <span>HTML</span>
                <span>JS</span>
                <span>CSS</span>
                <span>10</span>
              </div>
              <div className="links">
                <a href="/">
                  <LinkIcon className="linkIcons" />
                </a>
                <a href="/">
                  <GitHubIcon className="linkIcons" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container animate">
          <div className="card">
            <div className="imgBx">
              <ListSharpIcon className="projectIcon" style={{ color: '#ffffff' }} />
            </div>
            <div className="contentBx">
              <h2>Todo List</h2>
              <div className="technology">
                <h3>Technology:</h3>
                <span>HTML</span>
                <span>JS</span>
                <span>CSS</span>
                <span>10</span>
              </div>
              <div className="links">
                <a href="/">
                  <LinkIcon className="linkIcons" />
                </a>
                <a href="/">
                  <GitHubIcon className="linkIcons" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container animate">
          <div className="card">
            <div className="imgBx">
              <ListSharpIcon className="projectIcon" style={{ color: '#ffffff' }} />
            </div>
            <div className="contentBx">
              <h2>Todo List</h2>
              <div className="technology">
                <h3>Technology:</h3>
                <span>HTML</span>
                <span>JS</span>
                <span>CSS</span>
                <span>10</span>
              </div>
              <div className="links">
                <a href="/">
                  <LinkIcon className="linkIcons" />
                </a>
                <a href="/">
                  <GitHubIcon className="linkIcons" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container animate">
          <div className="card">
            <div className="imgBx">
              <ListSharpIcon className="projectIcon" style={{ color: '#ffffff' }} />
            </div>
            <div className="contentBx">
              <h2>Todo List</h2>
              <div className="technology">
                <h3>Technology:</h3>
                <span>HTML</span>
                <span>JS</span>
                <span>CSS</span>
                <span>10</span>
              </div>
              <div className="links">
                <a href="/">
                  <LinkIcon className="linkIcons" />
                </a>
                <a href="/">
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
