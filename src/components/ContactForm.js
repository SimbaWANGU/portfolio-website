/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

const ContactForm = () => {
  const form = useRef();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const SERVICE_ID = 'service_vjo5wik';
  const TEMPLATE_ID = 'template_91zrc2g';
  const PUBLIC_KEY = '1v1OXNWm06nDvnQrD';

  const sendEmail = (e) => {
    e.preventDefault();

    toast.promise(
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY), {
        loading: 'Saving...',
        success: <b>Message Sent</b>,
        error: <b>Please try again</b>,
      },
    );

    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="formDiv">
      <Toaster />
      <form ref={form} onSubmit={sendEmail} className="form">
        <input
          type="text"
          name="user_name"
          placeholder="Name"
          className="nameInput"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <span className="nameInputLabel">
          <p>Name</p>
        </span>
        <input
          type="email"
          name="user_email"
          placeholder="Email"
          className="emailInput"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <span className="emailInputLabel">
          <p>Email</p>
        </span>
        <textarea
          name="message"
          placeholder="Message"
          className="messageInput"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <span className="messageInputLabel">
          <p>Message</p>
        </span>
        <button type="submit" value="Send">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
