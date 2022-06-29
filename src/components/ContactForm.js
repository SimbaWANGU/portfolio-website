/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

const ContactForm = () => {
  const form = useRef();

  const YOUR_SERVICE_ID = 'service_vjo5wik';
  const YOUR_TEMPLATE_ID = 'template_91zrc2g';
  const YOUR_PUBLIC_KEY = '1v1OXNWm06nDvnQrD';

  const sendEmail = (e) => {
    e.preventDefault();

    toast.promise(
      emailjs.sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, form.current, YOUR_PUBLIC_KEY), {
        loading: 'Saving...',
        success: <b>Settings saved!</b>,
        error: <b>Could not save.</b>,
      },
    );
  };

  return (
    <>
      <Toaster />
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </>
  );
};

export default ContactForm;
