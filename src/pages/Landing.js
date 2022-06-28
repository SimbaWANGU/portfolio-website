/* eslint-disable max-len */
import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/landing.scss';

function Landing() {
  return (
    <div className="landing animate">
      <div className="content">
        <p>Hi, my name is</p>
        <h1>Simba</h1>
        <h6>I’m a software developer! I can help you build a product , feature or website Look through some of my work and experience! If you like what you see and have a project you need coded, don’t hestiate to contact me. </h6>
        <NavLink to="/projects">
          <button type="button">See Projects</button>
        </NavLink>
      </div>
    </div>
  );
}

export default Landing;
