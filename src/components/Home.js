import React from "react";
import image from "../background.jpg";

const Home = () => {
  return (
    <main>
      <img
        src={image}
        alt="Work Desk"
        className="absolute object-conver w-full h-full"
      />
      <section className="relative flex justify-center min-h-screen pt-12 lg:pt-24 px-8">
        <h6 className="text-20xl text-blue-300 font-bold cursive leading-none lg:leading-snug home-name">
          HELLO..
        </h6>
      </section>
    </main>
  );
};

export default Home;
