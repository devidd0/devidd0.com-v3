import React, { useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import {
  AiFillGithub,
  AiOutlineInstagram,
  AiOutlineYoutube,
} from "react-icons/ai";
import { FiFacebook, FiTwitter } from "react-icons/fi";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useTheme } from "next-themes";
const Index = () => {
  //Social Media array
  const [socialMedia] = useState([
    {
      username: "@PintiDevAziz",
      link: "https://github.com/pintidevaziz",
      icon: <AiFillGithub />,
    },
    {
      username: "@PintiDevAziz",
      link: "https://instagram.com/pintidevaziz",
      icon: <AiOutlineInstagram />,
    },
    {
      username: "@PintiDevAziz",
      link: "https://www.facebook.com/profile.php?id=100077839123950",
      icon: <FiFacebook />,
    },
    {
      username: "@PintiDevAziz",
      link: "https://twitter.com/pintidevaziz",
      icon: <FiTwitter />,
    },
    {
      username: "@PintiDevAziz",
      link: "https://www.youtube.com/channel/UCpERt5A7SNd7s5XNAj2mGmw",
      icon: <AiOutlineYoutube />,
    },
  ]);
  const animations = {
    initial: { opacity: 0, y: 100 },
    animate: { opacity: 1, y: 0 },
  };

  const { theme } = useTheme();
  return (
    <motion.div
      variants={animations}
      initial={"initial"}
      animate={"animate"}
      transition={{
        duration: 1,
        type: "tween",
      }}
      exit={"exit"}
      className=" w-[40rem] font-mono  "
    >
      <div className="dark:bg-[#ffffff14] bg-[#F5F0E8] rounded-lg  mb-5 dark:text-white text-themeBlack w-full h-12 flex items-center justify-center">
        Hello I am Aziz Front End Developer From Azerbaijan
      </div>
      <div className="dark:text-white flex mb-6  w-full items-start justify-between">
        <div>
          <h1 className="text-3xl tracking-widest font-semibold mb-1">
            Aziz Imranzade
          </h1>
          <p>Front End Developer(Developer/Gamer)</p>
        </div>
        <div className=" w-28 h-28 relative rounded-full overflow-hidden border-2 border-gray">
          <Image src="/avatar.jpg" layout="fill" />
        </div>
      </div>
      <div className="my-7">
        <h2 className=" underline underline-offset-8  decoration-gray-400 font-semibold text-2xl mb-3">
          Work
        </h2>
        <p>
          First of all HELLO For now I am student at Baku but I try to find a
          freelance work Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Quisquam totam dolorem adipisci laudantium excepturi praesentium
          quia, mollitia incidunt quae facilis culpa officiis laboriosam quis,
          nisi veniam, laborum repellat recusandae odio?
        </p>
        <Link href={"/works"}>
          <a className="mt-3 text-[#333] hover:bg-themeCyan/ transition-colors gap-x-2 group w-36 h-10 font-semibold rounded  inline-flex items-center justify-center bg-themeCyan">
            <span>My Works</span>
            <MdKeyboardArrowRight className="text-xl group-hover:translate-x-1 transition-transform" />
          </a>
        </Link>
      </div>
      <div className="my-7">
        <h2 className=" underline underline-offset-8  decoration-gray-400 font-semibold text-2xl mb-4">
          About Me
        </h2>
        <div className="relative w-full  h-[15rem] ">
          <Image
            src={theme == "white" ? "/carbonwhite.svg" : "/carbon.svg"}
            layout={"fill"}
          />
        </div>
      </div>
      <div className="my-7">
        <h2 className=" underline underline-offset-8  decoration-gray-400 font-semibold text-2xl mb-4">
          Social Media
        </h2>

        <ul className="flex w-full   gap-y-2 flex-wrap">
          {socialMedia &&
            socialMedia.map((item, indeks) => (
              <li className=" list-none" key={indeks}>
                <Link href={item.link}>
                  <a
                    target={"_blank"}
                    className=" inline-flex gap-x-2 transition-all  hover:underline underline-offset-4 decoration-themePink rounded-md dark:text-themeCyan text-[#2C7A7B] items-center h-10 px-4 hover:bg-[#2C7A7B]/20"
                  >
                    <span className="text-xl">{item.icon}</span>
                    <p>{item.username}</p>
                  </a>
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default Index;
