import React from 'react';
import Me from '../assets/logo.png';
import ContactForm from '../components/ContactForm';
import '../styles/contact.scss';

function Contact() {
  return (
    <div className="contact">
      <div className="formContainer">
        <div className="preForm">
          <img src={Me} alt="myImage" />
          <p>Send a message</p>
          <p>All feedback is valued</p>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}

export default Contact;
