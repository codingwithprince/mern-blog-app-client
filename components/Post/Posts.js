import React, { useEffect, useState } from "react";
import Image from "next/image";
import PostCard from "./PostCard";
import EditPost from "../EditPost/EditPost";
import SkeletonPost from "./SkeletonPost";
import SpinLoader from "../SpinLoader/SpinLoader";

const Posts = () => {
  const [posts, setPosts] = useState();

  useEffect(() => {
    fetch("https://mern-crud-blog-app.herokuapp.com/")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div className="py-10">
       <div className="post-sidebar">
        <div className="wrapper md:flex flex-row-reverse justify-between">
          <div className="author-info text-center rounded-md p-3">
            <Image
              height={200}
              width={200}
              className="object-cover rounded-full"
              alt="author-image"
              src="https://img.freepik.com/free-photo/cheerful-curly-business-girl-wearing-glasses_176420-206.jpg?w=1380&t=st=1661841059~exp=1661841659~hmac=9def11f2981f6ff34805dfd7cfa3896dfdaa78f4256f9ead74910c56f3ad4506"
            />
            <h4 className="text-indigo-500 text-2xl font-semibold">
              Hannan Master
            </h4>
            <p className="text-gray-500 px-5">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione,
              nisi?
            </p>
            <div className="social-links flex gap-2 justify-center">
              <a href="#">Facebook</a>
              <a href="#">Instagram</a>
              <a href="#">Twitter</a>
            </div>
          </div>

          <div className="latest-posts rounded-md bg-white shadow-md p-3 w-full">
            <h3 className="text-center text-gray-500 text-2xl font-semibold">
              Latest Posts
            </h3>
            <hr />
            <ul className="mt-5 px-3">
              {posts &&
                posts.slice(0, 5).map((itm) => (
                  <li className="hover:underline text-gray-500 py-1">
                    <a href={`#${itm._id}`}>{itm.title}</a>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    
      <div className="main-posts">
        {posts == null ? (
          <SpinLoader />
        ) : (
          posts.map((item) => <PostCard key={item.id} data={item} />)
        )}
      </div>

     
      
    </div>
  );
};

export default Posts;
