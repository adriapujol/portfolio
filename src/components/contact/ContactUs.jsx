import React from 'react';
import emailjs from 'emailjs-com';

import './ContactUs.scss';

export default function ContactUs() {


  const USER_ID = "user_jYZXzxdDKPQLjZdYTpglK";
  const TEMPLATE_ID = "template_fgg4umi";
  const SERVICE_ID = "service_pnqklrl";

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <form className="contact-form" onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" className="form-field" />
      <label>Email</label>
      <input type="email" name="user_email" className="form-field" />
      <label>Message</label>
      <textarea name="message" className="form-field"/>
      <button type="submit" value="Send" className="form-btn">SEND</button>
    </form>
  );
}