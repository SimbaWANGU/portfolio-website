import React from 'react';
import Me from '../assets/logo.png';
import ContactForm from '../components/ContactForm';
import SocialMedia from '../components/SocialMedia';
import '../styles/contact.scss';

function Contact() {
  return (
    <div className="contact animate">
      <div className="formContainer">
        <div className="preForm">
          <img src={Me} alt="myImage" />
          <p>Send a message</p>
          <p>All feedback is valued</p>
          <p>You can contact me on my social media below</p>
          <SocialMedia />
        </div>
        <ContactForm />
      </div>
    </div>
  );
}

export default Contact;
