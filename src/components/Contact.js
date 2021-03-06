import React from "react";
import image from "../codebg.jpg";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

// const submitBtn = () => {
//   console.log("Submited");
// };

const Contact = () => {
  return (
    <main className="relative">
      <img
        src={image}
        alt="World Map Binary"
        className="absolute opacity-20 object-cover w-full h-full"
      />
      <div className="p-10 lg:pt-6 container mx-auto relative">
        <form className="contact-form ml-10 ">
          <h1 className="text-5xl text-gray-700 flex justify-center cursive mb-10">
            Contact
          </h1>
          <div className="relative mt-2 mr-20 ml-20 w-150 h-600 ">
            <input
              className="w-full opacity-60 mr-20"
              type="text"
              id="name"
              placeholder="Full Name"
            />
            <br />
            <br />
            <input
              className="w-full opacity-60 mr-20"
              type="email"
              id="email"
              placeholder="Email"
            />
            <br />
            <br />
            <input
              className="w-full opacity-60 mr-20"
              type="text"
              id="subject"
              placeholder="Subject"
            />
            <br />
            <br />
            <textarea
              className="w-full opacity-60 mr-20"
              id="message"
              placeholder="Message"
              cols="30"
              rows="8"
            ></textarea>
            <br />
            <br />
            <Button
              className="w-50 ml-60"
              type="submit"
              value="Submit"
              variant="secondary"
            >
              Submit
            </Button>
          </div>
          <hr />
          <div className="ml-20">
            <h3>Sary Jamie</h3>
            <h4>
              Email:<span className="text-lg"> sary.jamie@gmail.com</span>
            </h4>
            <h4>Phone: +1(858)888-1577</h4>
            <h4>
              Github:{" "}
              <span>
                <a href="https://github.com/saryjamie">
                  {" "}
                  https://github.com/saryjamie
                </a>
              </span>
            </h4>
            <h4>
              linkedin:{" "}
              <span>
                <a href="https://www.linkedin.com/in/sary-jamie-mba-15162994/">
                  https://www.linkedin.com/in/sary-jamie-mba-15162994/
                </a>
              </span>
            </h4>
          </div>
          <br />
          <br />
        </form>
      </div>
    </main>
  );
};

export default Contact;
