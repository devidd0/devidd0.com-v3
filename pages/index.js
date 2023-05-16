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
      username: "Mənə Kofe al",
      link: "https://www.buymeacoffee.com/devidd0",
      icon: <SiBuymeacoffee />,
    },
    {
      username: "Dev.idd0 ",
      link: "https://linktr.ee/dev.idd0",
      icon: <SiLinktree />,
    },
    {
      username: "İşbirlyi üçün əlaqə",
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
          <p>Salam 👋 Veb-saytıma xoş gəlmisən Mən Aziz (Dev.idd0)</p>
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
            Mən Kiməm ? 🤔
          </h2>
          <p>
            Hamıya salam. Bu mənəm Dev.idd0. Hazırda Azərbaycanda yaşayıram və
            burada oxuyuram. Texnologiyada olmaq həqiqətən gözəldir. Mən Nextjs
            tərtibatçısıyam. Amma hazırda sosial media məni daha çox cəlb edir.
            Həyat məsləhətləri podkastlarını, blog yazılarını və YouTube
            videolarını paylaşıram. Kibertəhlükəsizliyə də böyük marağım var
          </p>
        </div>
        <div className="my-10">
          <h2 className=" underline underline-offset-8  decoration-gray-400 font-semibold sm:text-2xl text-xl mb-4">
            Karyera 👨‍💻
          </h2>
          <div className="relative w-full ">Coming soon .....</div>
        </div>
        <div className="my-10">
          <h2 className=" underline underline-offset-8  decoration-gray-400 font-semibold sm:text-2xl text-xl mb-4">
            Nə Etməyi sevirəm ❣️
          </h2>
          <div className="relative w-full">
            Mən həqiqətən ailəmlə vaxt keçirməyi sevirəm. o insanları görəndə
            xoşbəxt olmaq mənim üçün ən dəyərli şeydir. nə olursa olsun həmişə
            edəcəm Onları xoşbəxt etmək lazımdır, çünki mən onları çox sevirəm
          </div>
        </div>
        <div className="my-14">
          <h2 className=" underline underline-offset-8  decoration-gray-400 font-semibold sm:text-2xl text-lg mb-4">
            Sosial Media & Əlaqə 📨
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
