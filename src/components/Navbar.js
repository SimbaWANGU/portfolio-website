import React from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';
import '../styles/navbar.scss';
import HomeIcon from '@mui/icons-material/Home';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import ContactPageRoundedIcon from '@mui/icons-material/ContactPageRounded';
import Tooltip from '@mui/material/Tooltip';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ListAltIcon from '@mui/icons-material/ListAlt';
import Fade from '@mui/material/Fade';
import Me from '../assets/logo.png';
import Landing from '../pages/Landing';
import About from '../pages/About';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';

function Navbar() {
  return (
    <>
      <div className="nav">
        <img src={Me} alt="myImage" />
        <ul className="linksList">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? 'active' : 'inactive')}
            >
              <HomeIcon className="navIcon" />
              <p>Home</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? 'active' : 'inactive')}
            >
              <AssignmentIndIcon className="navIcon" />
              <p>About</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) => (isActive ? 'active' : 'inactive')}
            >
              <AssignmentIcon className="navIcon" />
              <p>Projects</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contactMe"
              className={({ isActive }) => (isActive ? 'active' : 'inactive')}
            >
              <ContactPageRoundedIcon className="navIcon" />
              <p>Contact</p>
            </NavLink>
          </li>
        </ul>
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
      </div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contactMe" element={<Contact />} />
      </Routes>
    </>
  );
}

export default Navbar;
