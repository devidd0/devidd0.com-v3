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
      className=" sm:w-[40rem]  h-full w-full px-8"
    >
      <Head>
        <title>PintiDev | Credits</title>
      </Head>
      <h2 className=" underline underline-offset-8  decoration-gray-400 font-semibold sm:text-2xl text-xl mb-3">
        Technolgies
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
        Inspared By
      </h2>
      <p className="mb-10">
        This web page was inspired by{" "}
        <a
          href="https://craftz.dog"
          target={"_blank"}
          className="dark:text-themePink text-cyan-500"
        >
          Takuya Matsuyama (crafzdog)
        </a>{" "}
        but the codes belong to me You can visit Github repo for more details{" "}
        <a
          href={"https://github.com/PintiDevAziz/portofiliov3"}
          target={"_blank"}
          className="dark:text-themePink text-cyan-500"
        >
          View Repo
        </a>
      </p>
      <h2 className=" underline underline-offset-8  decoration-gray-400 font-semibold sm:text-2xl text-xl mb-3">
        Assets
      </h2>
      <ul>
        <li>
          Voxel Room Model{" "}
          <a
            href={"https://sketchfab.com/moyicat"}
            target={"_blank"}
            className="dark:text-themePink text-cyan-500"
          >
            By Moyicat
          </a>
        </li>
        <li>
          Panda icon{" "}
          <a
            href={"https://www.flaticon.com/free-icon/panda_616563"}
            target={"_blank"}
            className="dark:text-themePink text-cyan-500"
          >
            By FlatIcon
          </a>
        </li>
      </ul>
    </motion.div>
  );
};

export default Credits;
