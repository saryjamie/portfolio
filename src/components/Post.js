import React, { useState, useEffect } from "react";
import sanityClient from "../client.js";

const Post = () => {
  const [postData, setPost] = useState(null);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
      title,
      slug,
      mainImage{
        asset->{
          _id,
          url
        },
        alt
      }
    }`
      )
      .then((data) => setPost(data))
      .catch(console.error);
  }, []);
  <main>
    <section>
      <h1></h1>
      <h2></h2>
      <div>
        <article>
          <Link>
            <span>
              <img />
              <span>
                <h3></h3>
              </span>
            </span>
          </Link>
        </article>
      </div>
    </section>
  </main>;
};

export default Post;
