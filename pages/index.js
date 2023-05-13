import React from "react";

import Image from "next/image";
import { motion } from "framer-motion";
import { AiFillGithub, AiOutlineInstagram } from "react-icons/ai";
import { FiYoutube } from "react-icons/fi";
import Typewriter from "typewriter-effect";
import { SiBuymeacoffee, SiLinktree } from "react-icons/si";
import SocialMediaButton from "../components/index/socialMediaButton";
import { useState, useEffect } from "react";
import { AiOutlineWhatsApp } from "react-icons/ai";
const Index = () => {
  //Social Media array
  const [socialMedia] = useState([
    {
      username: "@Devidd0",
      link: "https://github.com/devidd0",
      icon: <AiFillGithub />,
    },
    {
      username: "@Dev.idd0",
      link: "https://instagram.com/dev.idd0",
      icon: <AiOutlineInstagram />,
    },
    {
      username: "@Dev.idd0",
      link: "https://www.youtube.com/channel/UCjvqOd9FGmXz1Ob_vQdh7cQ",
      icon: <FiYoutube />,
    },
    {
      username: "Buy Me A Coffe",
      link: "https://www.buymeacoffee.com/devidd0",
      icon: <SiBuymeacoffee />,
    },
    {
      username: "Dev.idd0 On Web",
      link: "https://linktr.ee/dev.idd0",
      icon: <SiLinktree />,
    },
    {
      username: "Contact For Work",
      link: "https://api.whatsapp.com/send/?phone=%2B9940775735560&text&type=phone_number&app_absent=0",
      icon: <AiOutlineWhatsApp />,
    },
  ]);
  const animations = {
    initial: { opacity: 0, y: 100 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <>
      <motion.div
        variants={animations}
        initial={"initial"}
        animate={"animate"}
        transition={{
          duration: 1,
          type: "tween",
        }}
        exit={"exit"}
        className=" sm:w-[40rem] w-full px-8 sm:px-0  mt-12 "
      >
        <div className="dark:bg-[#ffffff14] bg-[#F5F0E8] text-center px-3 sm:px-0   rounded-lg  mb-5 dark:text-white text-themeBlack w-full sm:h-12 h-14 flex items-center justify-center">
          <p>Hola 👋 Welcome to my website I am Aziz (Dev.idd0)</p>
        </div>
        <div className="dark:text-white    flex sm:flex-row flex-col items-center mb-6  gap-y-4 sm:gap-y-0  w-full justify-between">
          <div>
            <h1 className="sm:text-3xl text-xl tracking-widest font-semibold mb-1">
              Aziz Imranzade
            </h1>
            <p className="text-center">
              <Typewriter
                options={{
                  strings: [
                    "Full Stack Developer",
                    "Content Creator",
                    "Deyviddooo",
                    "Diciplined",
                    "Determined",
                    "Funny Guy",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </p>
          </div>
          <div className=" sm:w-32 sm:h-32 w-24 flex-shrink-0 h-24 relative rounded-full overflow-hidden border-2 border-gray">
            <Image
              src="/avatar.jpg"
              alt="Dev.Idd0 Avatar"
              fill
              className=" object-cover"
            />
          </div>
        </div>
        <div className="my-10">
          <h2 className=" underline underline-offset-8  decoration-gray-400 font-semibold sm:text-2xl text-xl mb-3">
            Who Am I ? 🤔
          </h2>
          <p>
            Hello everyone. This is me Dev.idd0. I currently live in Azerbaijan
            and study here. Being in tech is really cool. I am a Nextjs
            developer. But right now, social media is more appealing to me. I
            share life advice podcasts, blog posts and YouTube videos. I also
            have a keen interest in cyber security
          </p>
        </div>
        <div className="my-10">
          <h2 className=" underline underline-offset-8  decoration-gray-400 font-semibold sm:text-2xl text-xl mb-4">
            Work 👨‍💻
          </h2>
          <div className="relative w-full ">Coming soon .....</div>
        </div>
        <div className="my-10">
          <h2 className=" underline underline-offset-8  decoration-gray-400 font-semibold sm:text-2xl text-xl mb-4">
            What I Love ❣️
          </h2>
          <div className="relative w-full">
            I really love spending time with my family. seeing those people
            happy is the most valuable thing to me. i will always do whatever it
            takes to make them happy because i love them so much
          </div>
        </div>
        <div className="my-14">
          <h2 className=" underline underline-offset-8  decoration-gray-400 font-semibold sm:text-2xl text-lg mb-4">
            Social Media & Contact 📨
          </h2>

          <ul className="flex w-full   sm:gap-y-2 gap-y-3 flex-wrap">
            {socialMedia &&
              socialMedia.map((item, indeks) => (
                <li className=" list-none" key={indeks}>
                  <SocialMediaButton
                    link={item.link}
                    icon={item.icon}
                    username={item.username}
                  />
                </li>
              ))}
          </ul>
        </div>
      </motion.div>
    </>
  );
};

export default Index;
