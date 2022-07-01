/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
import React from 'react';
import Modal from 'react-modal';
import HorizontalSplitIcon from '@mui/icons-material/HorizontalSplit';
import CloseIcon from '@mui/icons-material/Close';
import '../styles/about.scss';
import TechStack from '../components/TechStack';

function About() {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="aboutMe animate">
      <div className="aboutMeContent">
        <h1>About Me</h1>
        <ul>
          <li>
            <p>
              I am currently a student at Microverse. This is a fully remote school that trains web developers through collaboration.
            </p>
          </li>
          <li>
            <p>
              I have currently completed 3 modules that are the following:
            </p>
          </li>
          <li>
            <p>
              - HTML/CSS
              <br />
              - JavaScript
              <br />
              - React/ Redux
              <br />
            </p>
          </li>
          <li>
            <p>
              I enjoy the process of building software, from discovering and understanding an existing problem to crafting and developing a solution.
            </p>
          </li>
          <li>
            <p>
              I am currently searching for my next role and I'm open to new opportunities
            </p>
          </li>
        </ul>
      </div>
      <button type="button" onClick={openModal}>
        <HorizontalSplitIcon />
      </button>
      <Modal
        className="modal animate"
        isOpen={modalIsOpen}
        contentLabel="Example Modal"
      >
        <button type="button" onClick={closeModal}>
          <CloseIcon />
        </button>
        <TechStack />
      </Modal>
    </div>
  );
}

export default About;
