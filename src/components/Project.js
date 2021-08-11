import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client.js";

const Project = () => {
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "projectimg]{
      title,
      _id,
      mainImage{
        asset->{
          _id,
          url
        },
        alt
      },
      body,
      link
    }`
      )
      .then((data) => setProjectData(data))
      .catch(console.error);
  }, []);

  if (!projectData) return <div>Loading...</div>;

  return (
    <main>
      <section>
        {projectData &&
          projectData.map((projectimg, index) => (
            <Link to={"/projectimg/" + projectimg.link} key={index}>
              <span
                className="block h-64 relative rounded shadow leading-snug bg-white border-4 border-blue-200"
                key={index}
              >
                <img
                  src={projectimg.mainImage.asset.url}
                  alt={projectimg.mainImage.alt}
                />
                <span className="block relative h-full flex justify-end items-end pr-4 pb-4">
                  <h3>{projectimg.title}</h3>
                </span>
                {/* <p>Project Descreption</p> */}
              </span>
            </Link>
          ))}
      </section>
    </main>
  );
};

// const Project = () => {
//   const [projectData, setProjectData] = useState(null);

//   useEffect(() => {
//     sanityClient
//       .fetch(
//         `*[_type == "project"]{
//       title,
//       date,
//       place,
//       description,
//       projectType,
//       link,
//       tags
//     }`
//       )
//       .then((data) => setProjectData(data))
//       .catch(console.error);
//   }, []);

//   return (
//     <main className="bg-green-100 min-h-screen p-12">
//       <section className="container mx-auto">
//         <h1 className="text-5xl flex justify-center cursive">Project</h1>
//         <h2 className="text-lg text-gray-600 flex justify-center mb-12">
//           Welcome to my projects page
//         </h2>
//         <section className="grid grid-cols-2 gap-8">
//           {projectData &&
//             projectData.map((project, index) => (
//               <article className="relative reounded-lg shadow-xl bg-white p-16">
//                 <h3 className="text-gray-800 text-3xl font-bold mb-2 hover:text-red-700">
//                   <a
//                     href={project.link}
//                     alt={project.title}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     {project.title}
//                   </a>
//                 </h3>
//                 <div className="text-gray-500 text-xs space-x-4">
//                   <span>
//                     <strong className="font-bold">Finished on</strong>:{" "}
//                     {new Date(project.date).toLocaleDateString()}
//                   </span>
//                   <span>
//                     <strong className="font-bold">Company</strong>:{" "}
//                     {project.place}
//                   </span>
//                   <span>
//                     <strong className="font-bold">Type</strong>:{" "}
//                     {project.projectType}
//                   </span>
//                   <p className="my-6 text-lg text-gray-700 leading-relaxed">
//                     {project.description}
//                   </p>
//                   <a
//                     href={project.link}
//                     rel="noopener noreferrer"
//                     target="_blank"
//                     className="text-red-500 font-bold text-xl hover:underline hover:text-red-400 justify-center"
//                   >
//                     Live{" "}
//                     {/* <span role="img" aria-label="right pointer">
//                       ➡️
//                     </span> */}
//                   </a>
//                 </div>
//               </article>
//             ))}
//         </section>
//       </section>
//     </main>
//   );
// };

export default Project;
