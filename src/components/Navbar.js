import React from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';
import '../styles/navbar.scss';
import HomeIcon from '@mui/icons-material/Home';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import ContactPageRoundedIcon from '@mui/icons-material/ContactPageRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ListAltIcon from '@mui/icons-material/ListAlt';
import Me from '../assets/logo.png';

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
              to="/profile"
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
              <TwitterIcon />
            </a>
          </li>
          <li>
            <a href="https://github.com/SimbaWANGU">
              <GitHubIcon />
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/in/simba-wangulu/">
              <LinkedInIcon />
            </a>
          </li>
          <li>
            <a href="nkedin.com/in/simba-wangulu/">
              <ListAltIcon />
            </a>
          </li>
        </ul>
        <Routes>
          <Route path="/" />
          <Route path="/projects" />
          <Route path="/contactme" />
        </Routes>
      </div>
    </>
  );
}

export default Navbar;
