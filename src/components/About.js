import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
import pf9 from "../pf9.jpg";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

const About = () => {
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "author"]{
      name,
      bio,
      "authorImage": image.asset->url
    }`
      )
      .then((data) => setAuthor(data[0]))
      .catch(console.error);
  }, []);

  if (!author) return <div>Loading...</div>;

  return (
    <main className="relative ">
      <img src={pf9} alt="Country" className="absolute w-full h-full" />
      <div className="p-10 lg:pt-12 container mx-auto relative">
        <h1 className="text-5xl text-gray-700 flex justify-center cursive mb-10">
          About Me
        </h1>
        <section className="bg-blue-800 opacity-90 rounded-lg shadow-2xl lg:flex p-20 pt-10">
          <img
            src={urlFor(author.authorImage).url()}
            alt={author.name}
            className="rounded w-32 h-32 lg:w-64 lg:h-64 mr-8"
          />
          <div className="text-lg flex flex-col justify-center">
            {/* <h1 className="cursive text-3xl text-green-300 mb-4">
              {" "}
              Hey there, I'm {"  "}
              <span className="text-green-100">{author.name}</span>
            </h1> */}
            <div className="prose lg:prose-xl text-white">
              <BlockContent
                blocks={author.bio}
                projectId="ehpqzlby"
                dataset="production"
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default About;
