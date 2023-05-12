import React from "react";
import { motion } from "framer-motion";
import { useEffect } from "react";
import client from "../../helpers/client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { NextSeo } from "next-seo";
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
      className=" sm:w-[40rem] px-8 sm:px-0   w-full sm:mt-12 min-h-screen font-mono flex-col flex text-white "
    >
      <NextSeo
        title="Dev.idd0 Blog"
        description="Dev.idd0 Blog Posts "
        additionalMetaTags={[
          {
            property: "keywords",
            content:
              "Dev.idd0 Blog Posts ,Coding Tutorials, Blog Posts from my life and Dev Journey",
          },
        ]}
      />
      <div className="dark:bg-[#ffffff14] bg-[#F5F0E8] capitalize text-center px-3 sm:px-0   rounded-lg  mb-5 dark:text-white text-themeBlack w-full sm:h-12 h-14 flex items-center justify-center">
        <p>Dev.idd0 Blog | Lifestyle, Coding, Social Life </p>
      </div>
      <h1 className="text-2xl  mb-4">Blog Posts</h1>
      <main className="w-full  flex flex-wrap  justify-center   relative sm:gap-6 gap-3 ">
        {posts.length == 0 ? (
          <img src="./loading.svg" className="mx-auto" />
        ) : (
          posts.map((post, indeks) => (
            <Link key={indeks} href={`blog/${post.slug.current}`}>
              <a className=" w-72 flex-col flex  overflow-hidden object-cover">
                <div className="min-h-[8rem] flex-shrink-0 w-full relative mb-3 rounded-lg overflow-hidden   ">
                  <Image
                    src={post.mainImage.asset.url}
                    placeholder="blur"
                    className=" object-cover "
                    blurDataURL={"./loading.gif"}
                    fill={true}
                  />
                </div>
                <h2 className=" mx-auto text-lg mb-2 capitalize text-center">
                  {post.title}
                </h2>
                <p className="text-center">{post.summary}</p>
              </a>
            </Link>
          ))
        )}
      </main>
    </motion.div>
  );
};

export default posts;
