/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

const ContactForm = () => {
  const form = useRef();

  const SERVICE_ID = 'service_vjo5wik';
  const TEMPLATE_ID = 'template_91zrc2g';
  const PUBLIC_KEY = '1v1OXNWm06nDvnQrD';

  const sendEmail = (e) => {
    e.preventDefault();

    toast.promise(
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY), {
        loading: 'Saving...',
        success: <b>Settings saved!</b>,
        error: <b>Could not save.</b>,
      },
    );
  };

  return (
    <div className="formDiv">
      <Toaster />
      <form ref={form} onSubmit={sendEmail} className="form">
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
};

export default ContactForm;
