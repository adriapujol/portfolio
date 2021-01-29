import React, { useState } from 'react';
import emailjs from 'emailjs-com';

import './ContactUs.scss';

export default function ContactUs() {

  const [sendSuccess, setSendSuccess] = useState(true);
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const USER_ID = process.env.REACT_APP_EMAILJS_USER_ID;
  const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;

  const successMessage = "Thanks! I'll get back to you as soon as I can.";
  const failMessage = "Sorry! There was an error and the message could not be sent.";


  const nameChange = (e) => {
    setName(e.target.value);
  }
  const emailChange = (e) => {
    setEmail(e.target.value);
  }
  const textChange = (e) => {
    setText(e.target.value);
  }

  function sendEmail(e) {
    e.preventDefault();

    if (name === "" || email === "" || text === "") {
      setMessage("");
      setSendSuccess(false);
      setMessage(failMessage);
    } else {
          emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
            .then((result) => {
              setMessage("");
              setSendSuccess(true);
              setMessage(successMessage);
              setName("");
              setEmail("");
              setText("");
            }, (error) => {
              setMessage("");
              setSendSuccess(false);
              setMessage(failMessage);
            });
    }
  }

  return (
    <form className="contact-form" onSubmit={sendEmail}>
      <label>Name*</label>
      <input type="text" name="user_name" className="form-field" value={name} onChange={nameChange}/>
      <label>Email*</label>
      <input type="email" name="user_email" className="form-field" value={email} onChange={emailChange}/>
      <label>Message*</label>
      <textarea name="message" className="form-field" value={text} onChange={textChange}/>
      <button type="submit" value="Send" className="form-btn">SEND</button>
      <div className="required">(*) Required</div>
      <div className={sendSuccess ? "message" : "message fail"}>{message}</div>
    </form>
  );
}