import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useState } from "react";
import { SiFoodpanda } from "react-icons/si";
import { BsSun } from "react-icons/bs";
import { MdDangerous, MdOutlineDarkMode } from "react-icons/md";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
const Header = () => {
  /*
    Menu routes
    Home Page -> /
    Works Page -> /works
    Blog Page -> /blog
    */
  const [menuRoutes] = useState([
    {
      title: "Works",
      path: "/works",
    },
    {
      title: "Blog",
      path: "/blog",
    },
  ]);
  //! Router
  const router = useRouter();
  let sunVariants = {
    dark: { y: [-40, 0] },
    light: { y: [-41, 0] },
  };
  const { theme, setTheme } = useTheme();
  return (
    <header className="flex backdrop-blur-md bg-[#F5F0E8]/60 dark:bg-transparent items-center px-80 h-16  justify-between text-white font-mono  z-[999]  fixed w-full top-0">
      <div className="flex gap-x-10">
        <div className="flex items-center gap-x-2 text-xl group dark:text-white text-themeBlack">
          <SiFoodpanda className=" group-hover:-translate-x-[1px] transition-transform  group-hover:rotate-2 origin-top" />
          <Link href={"/"}>
            <a className="font-semibold tracking-wider"> PintiDev</a>
          </Link>
        </div>
        <ul className="gap-x-2 flex items-center  text-themeBlack  tracking-wider">
          {menuRoutes.map((menu, indeks) => (
            <Link href={menu.path} key={indeks}>
              <a
                className={` hover:underline dark:text-white text-themeBlack hover:text-black underline-offset-2 px-4 py-2 dark:hover:text-white  ${
                  router.asPath == menu.path &&
                  "  hover:text-black bg-themeCyan dark:text-black  rounded "
                }`}
              >
                {menu.title}
              </a>
            </Link>
          ))}
        </ul>
      </div>
      <div
        onClick={() => {
          setTheme(theme == "white" ? "dark" : "white");
        }}
        className={`rounded-md transition-colors flex items-center  justify-center  overflow-hiddentext-lg ${
          theme == "white" ? "bg-themePurple " : "bg-themeYellow text-black"
        } w-10 h-10  cursor-pointer hover:border-gray-300`}
      >
        {" "}
        <motion.div
          initial={theme == "dark" ? "dark" : "light"}
          animate={theme == "dark" ? "dark" : "light"}
          transition={{
            type: "spring",
            damping: 500,
            duration: 0.5,
          }}
          exit={"exit"}
          variants={sunVariants}
        >
          {theme == "white" ? <MdOutlineDarkMode /> : <BsSun />}
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
