import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";

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

  return (
    <main className="bg-white min-h-screen p-12">
      <section className="container mx-auto">
        <h1 className="text-5xl flex justify-center cursive">Project</h1>
        <h2 className="text-lg text-gray-600 flex justify-center mb-12">
          Welcome to my projects page
        </h2>
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projectData &&
            projectData.map((project, index) => (
              <article>
                <span className="block h-160 relative rounded reounded-lg shadow-xl bg-blue-200 p-5 border">
                  <h3 className="text-gray-800 text-xl font-bold mb-2 hover:text-red-700">
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
                        className="text-blue-700 font-bold text-xl hover:underline hover:text-red-500 justify-center"
                      >
                        LIVE{" "}
                        {/* <span role="img" aria-label="right pointer">
                      ➡️
                    </span> */}
                      </a>
                      <a
                        href={project.githublink}
                        rel="noopener noreferrer"
                        target="_blank"
                        className="m-10 text-blue-700 font-bold text-xl hover:underline hover:text-red-500 justify-center"
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
