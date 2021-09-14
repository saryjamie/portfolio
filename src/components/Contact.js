import React from "react";

const Contact = () => {
  return (
    <main className="bg-blue-100 main-h-screen p-12">
      <div className="form-container">
        <form className="contact-form ml-10">
          <h1>CONTACT</h1>
          <input type="text" id="name" placeholder="Full Name" />
          <br />
          <br />
          <input type="email" id="email" placeholder="Email" />
          <br />
          <br />
          <input type="text" id="subject" placeholder="Subject" />
          <br />
          <br />
          <textarea
            id="message"
            placeholder="Message"
            cols="30"
            rows="10"
          ></textarea>
          <br />
          <br />
        </form>
      </div>
    </main>
  );
};

export default Contact;
