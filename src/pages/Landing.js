/* eslint-disable max-len */
import React from 'react';
import '../styles/landing.scss';
import Navbar from '../components/Navbar';

function Landing() {
  return (
    <div className="landing animate">
      <Navbar />
      <div className="content">
        <p>Hi, my name is</p>
        <h1>Simba</h1>
        <h6>I’m a software developer! I can help you build a product , feature or website Look through some of my work and experience! If you like what you see and have a project you need coded, don’t hestiate to contact me. </h6>
        <button type="button">See Projects</button>
      </div>
    </div>
  );
}

export default Landing;
