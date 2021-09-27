import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
import image from "../codebg.jpg";

const Project = () => {
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "project"]{
      title,
      date,
      place,
      description,
      mainImage{
        asset->{
          _id,
          url
        },
        alt
      },
      projectType,
      link,
      githublink,
      tags
    }`
      )
      .then((data) => setProjectData(data))
      .catch(console.error);
  }, []);

  if (!projectData) return <div className="loader">Loading...</div>;

  return (
    <main className="relative">
      <img
        src={image}
        alt="World Map Binary"
        className="absolute opacity-20 w-full h-full"
      />
      <section className="container mx-auto">
        <h1 className="text-5xl text-gray-700 flex justify-center cursive">
          Projects
        </h1>
        <h2 className="text-lg text-gray-600 flex justify-center mb-12">
          Welcome To My Projects Page
        </h2>
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projectData &&
            projectData.map((project) => (
              <article>
                <span className="block h-160 relative rounded reounded-lg shadow-xl bg-blue-200 p-5 border">
                  <h3 className="text-gray-800 text-xl font-bold mb-2 hover:text-red-600">
                    <a
                      href={project.link}
                      alt={project.title}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.title}
                    </a>
                  </h3>
                  <div className="text-gray-500 text-xs space-x-4 pr-8">
                    <span>
                      <strong className="font-bold">Finished on</strong>:{" "}
                      {new Date(project.date).toLocaleDateString()}
                    </span>
                    <span>
                      <strong className="font-bold">Company</strong>:{" "}
                      {project.place}
                    </span>
                    <span>
                      <strong className="font-bold">Type</strong>:{" "}
                      {project.projectType}
                      <p className="my-3 text-lg text-gray-600 leading-relaxed">
                        {project.description}
                      </p>
                      <a
                        href={project.link}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <img
                          src={project.mainImage.asset.url}
                          alt={project.mainImage.asset.alt}
                          className="relative shadow rounded mb-8"
                          style={{
                            marginBottom: "5",
                            height: "250px",
                            width: "750",
                          }}
                        />
                      </a>
                      <a
                        href={project.link}
                        rel="noopener noreferrer"
                        target="_blank"
                        className="text-blue-700 font-bold text-xl hover:text-red-600 justify-center"
                      >
                        LIVE{" "}
                      </a>
                      <a
                        href={project.githublink}
                        rel="noopener noreferrer"
                        target="_blank"
                        className="m-10 text-blue-700 font-bold text-xl hover:text-red-600 justify-center"
                      >
                        GitHub{" "}
                      </a>
                    </span>
                  </div>
                </span>
              </article>
            ))}
        </section>
      </section>
    </main>
  );
};

export default Project;
