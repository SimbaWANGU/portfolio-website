import React from 'react';
import '../styles/landing.scss';
import Navbar from '../components/Navbar';

function Landing() {
  return (
    <div className="landing animate">
      <Navbar />
      <div className="content">
        <h6>Hi, my name is</h6>
        <h1>Simba</h1>
        <p>I am a Fullstack Web Developer </p>
      </div>
    </div>
  );
}

export default Landing;
