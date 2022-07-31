import React from "react";
import { motion } from "framer-motion";
import { useEffect } from "react";
import client from "../../helpers/client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
const works = () => {
  const animations = {
    initial: { opacity: 0, y: -100 },
    animate: { opacity: 1, y: [-10, 0] },
  };
  const [works, setWorks] = useState([]);
  useEffect(() => {
    client
      .fetch(
        `*[_type=="works"]{
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
        setWorks(data);
      });
  }, []);
  return (
    <motion.div
      variants={animations}
      initial={"initial"}
      animate={"animate"}
      transition={{
        duration: 2,
      }}
      exit={"exit"}
      className=" w-[40rem] font-mono flex-col flex text-white "
    >
      <h1 className="text-2xl  mb-4">Works</h1>
      <div className="w-full  flex flex-wrap   relative gap-6 ">
        {works.length == 0 ? (
          <img src="./loading.svg" className="mx-auto" />
        ) : (
          works.map((work, indeks) => (
            <Link key={indeks} href={`works/${work.slug.current}`}>
              <a className=" w-72 flex-col h-60  flex  overflow-hidden object-cover">
                <div className="h-36 w-full relative mb-3 rounded-lg overflow-hidden">
                  <Image
                    src={work.mainImage.asset.url}
                    layout="fill"
                    placeholder="blur"
                    blurDataURL={"./loading.gif"}
                    objectFit="cover"
                    objectPosition={"center"}
                  />
                </div>
                <h2 className=" mx-auto text-xl mb-2 capitalize">
                  {work.title}
                </h2>
                <p>{work.summary}</p>
              </a>
            </Link>
          ))
        )}
      </div>
    </motion.div>
  );
};

export default works;
