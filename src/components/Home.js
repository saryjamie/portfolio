import React from "react";
import image from "../background3.jpg";

const Home = () => {
  return (
    <main>
      <img
        src={image}
        alt="San Diego"
        className="absolute object-cover w-full h-full"
      />
      <section className="relative flex justify-center min-h-screen pt-12 lg:pt-44 px-8">
        <h1 className="text-6xl text-gray-500 font-bold cursivea leading-none lg:leading-snug home-name">
          HELLO. IT'S SARY.
        </h1>
      </section>
    </main>
  );
};

export default Home;
