import React from "react";
import { FaReact } from "react-icons/fa";
import SocialMediaButton from "../components/index/socialMediaButton";
import { motion } from "framer-motion";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTailwindcss, SiThreedotjs } from "react-icons/si";
import { FiFramer } from "react-icons/fi";
import Head from "next/head";
const Credits = () => {
  const technolgies = [
    {
      title: "ReactJs",
      url: "https://reactjs.org",
      icon: <FaReact />,
    },
    {
      title: "NextJs",
      url: "https://nextjs.org",
      icon: <TbBrandNextjs />,
    },
    {
      title: "TailwindCss",
      url: "https://tailwindcss.com/",
      icon: <SiTailwindcss />,
    },
    {
      title: "ThreeJs",
      url: "https://threejs.org",
      icon: <SiThreedotjs />,
    },
    {
      title: "Framer Motion",
      url: "https://framer.com/motion",
      icon: <FiFramer />,
    },
  ];
  const variants = {
    initial: { y: 100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };
  return (
    <motion.div
      variants={variants}
      animate="animate"
      initial="initial"
      transition={{
        duration: 1,
        type: "tween",
      }}
      className=" sm:w-[40rem]  h-screen w-full px-8 mt-12"
    >
      <Head>
        <title>Dev.Idd0 | Lisenziya</title>
      </Head>
      <div className="dark:bg-[#ffffff14]  bg-[#F5F0E8] capitalize text-center px-3 sm:px-0   rounded-lg  mb-5 dark:text-white text-themeBlack w-full sm:h-12 h-14 flex items-center justify-center">
        <p>Burada İstifadə olunan texnologiyalar və müəllif hüquqları</p>
      </div>
      <h2 className=" underline underline-offset-8  decoration-gray-400 font-semibold sm:text-2xl text-xl mb-3">
        Texnologiyalar
      </h2>
      <ul className="flex flex-col  gap-y-2 mb-10">
        {technolgies.map((item, indeks) => (
          <SocialMediaButton
            username={item.title}
            icon={item.icon}
            link={item.url}
            key={indeks}
          />
        ))}
      </ul>
      <h2 className=" underline underline-offset-8  decoration-gray-400 font-semibold sm:text-2xl text-xl mb-3">
        İlhamlanmışdır
      </h2>
      <p className="mb-10">
        Bu veb səhifədən{" "}
        <a
          href="https://craftz.dog"
          target={"_blank"}
          className="dark:text-themePink text-cyan-500"
        >
          Takuya Matsuyama (crafzdog){" "}
        </a>
        ilhamlanıb lakin kodlar mənə məxsusdur. Ətraflı məlumat üçün Github
        repo-ya baş çəkə bilərsiniz
        <a
          href={"https://github.com/devidd0/portofiliov3"}
          target={"_blank"}
          className="dark:text-themePink text-cyan-500"
        >
          View Repo
        </a>
      </p>
    </motion.div>
  );
};

export default Credits;
