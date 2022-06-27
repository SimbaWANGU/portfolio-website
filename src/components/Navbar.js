import React from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';
import '../styles/navbar.scss';
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
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) => (isActive ? 'active' : 'inactive')}
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/profile"
              className={({ isActive }) => (isActive ? 'active' : 'inactive')}
            >
              Contact
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
