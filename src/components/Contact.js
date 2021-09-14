import React from "react";
import image from "../codebg.jpg";

const Contact = () => {
  return (
    <main>
      <img
        src={image}
        alt="World Map Binary"
        className="absolute opacity-20 object-cover w-full h-full"
      />
      <div className="p-10 lg:pt-6 container mx-auto relative">
        <form className="contact-form ml-10">
          <h1 className="text-5xl text-gray-700 flex justify-center cursive mb-10">
            Contact Me
          </h1>
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
          <button>SUBMIT</button>
        </form>
      </div>
    </main>
  );
};

export default Contact;
