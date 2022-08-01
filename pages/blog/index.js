import React from "react";
import { motion } from "framer-motion";
import { useEffect } from "react";
import client from "../../helpers/client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
const posts = () => {
  const animations = {
    initial: { opacity: 0, y: 100 },
    animate: { opacity: 1, y: 0 },
  };
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    client
      .fetch(
        `*[_type=="post"]{
        body,
        title,
        summary,
        publishedAt,
        mainImage{
          asset->{
            _id,
            url
          }
        },
        _id,
        slug,
      }`
      )
      .then((data) => {
        setPosts(data);
      });
  }, []);
  return (
    <motion.div
      variants={animations}
      initial={"initial"}
      animate={"animate"}
      transition={{
        duration: 1,
      }}
      exit={"exit"}
      className=" sm:w-[40rem] px-8 sm:px-0   w-full mt-12  font-mono flex-col flex text-white "
    >
      <h1 className="text-2xl  mb-4">Blog Posts</h1>
      <div className="w-full  flex flex-wrap  justify-center   relative sm:gap-6 gap-3 ">
        {posts.length == 0 ? (
          <img src="./loading.svg" className="mx-auto" />
        ) : (
          posts.map((post, indeks) => (
            <Link key={indeks} href={`blog/${post.slug.current}`}>
              <a className=" w-72 flex-col h-60  flex  overflow-hidden object-cover">
                <div className="h-36 w-full relative mb-3 rounded-lg overflow-hidden">
                  <Image
                    src={post.mainImage.asset.url}
                    layout="fill"
                    placeholder="blur"
                    blurDataURL={"./loading.gif"}
                    objectFit="cover"
                    objectPosition={"center"}
                  />
                </div>
                <h2 className=" mx-auto text-xl mb-2 capitalize">
                  {post.title}
                </h2>
                <p className="text-center">{post.summary}</p>
              </a>
            </Link>
          ))
        )}
      </div>
    </motion.div>
  );
};

export default posts;
