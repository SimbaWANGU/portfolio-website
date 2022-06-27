import React from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';
import '../styles/navbar.scss';

function Navbar() {
  return (
    <>
      <div className="nav">
        <p className="logoTitle">Space Travelers Hub</p>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? 'active' : 'inactive')}
        >
          Home
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) => (isActive ? 'active' : 'inactive')}
        >
          Projects
        </NavLink>
        <NavLink
          to="/profile"
          className={({ isActive }) => (isActive ? 'active' : 'inactive')}
        >
          Contact
        </NavLink>
      </div>
      <Routes>
        <Route path="/" />
        <Route path="/projects" />
        <Route path="/contactme" />
      </Routes>
    </>
  );
}

export default Navbar;
