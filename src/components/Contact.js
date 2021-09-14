import React from "react";

const Contact = () => {
  return (
    <div class="form-container">
      <form class="contact-form">
        <h1>CONTACT</h1>
        <input type="text" id="name" placeholder="Full Name" />
        <br />
        <input type="email" id="email" placeholder="Email" />
        <br />
        <input type="text" id="subject" placeholder="Subject" />
        <br />
        <textarea
          id="message"
          placeholder="Message"
          cols="30"
          rows="10"
        ></textarea>
        <br />
      </form>
    </div>
  );
};

export default Contact;
