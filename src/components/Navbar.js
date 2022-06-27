import React from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';
import '../styles/navbar.scss';
import HomeIcon from '@mui/icons-material/Home';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ContactPageRoundedIcon from '@mui/icons-material/ContactPageRounded';
import Me from '../assets/profilepic.png';

function Navbar() {
  return (
    <>
      <div className="nav">
        <img src={Me} alt="myImage" />
        <h2>Simba Wangulu</h2>
        <ul>
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
