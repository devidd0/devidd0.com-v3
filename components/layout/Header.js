import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useState } from "react";
import { SiFoodpanda } from "react-icons/si";
import { BsSun } from "react-icons/bs";
import { MdOutlineDarkMode, MdSendToMobile } from "react-icons/md";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { AiOutlineMenu } from "react-icons/ai";
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
  const [menu, setMenu] = useState(false);
  const menuVariants = {
    open: { opacity: 1, y: 0 },
    close: { opacity: 0, y: -1000 },
  };
  const [mobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (window.innerWidth > 320 && window.innerWidth < 770) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
    console.log(window.innerWidth);
  }, [window.innerWidth]);
  return (
    <header className="flex backdrop-blur-md bg-[#F5F0E8]/60 dark:bg-transparent items-center sm:px-80 px-10 h-16  justify-between text-white font-mono z-[900]  fixed w-full top-0">
      <div className="flex gap-x-10">
        <div className="flex items-center gap-x-2 text-xl group dark:text-white text-themeBlack">
          <SiFoodpanda className=" group-hover:-translate-x-[1px] transition-transform  group-hover:rotate-2 origin-top" />
          <Link href={"/"}>
            <a className="font-semibold tracking-wider"> PintiDev</a>
          </Link>
        </div>
        <motion.ul
          variants={mobile ? menuVariants : null}
          initial={menu ? "open" : "close"}
          animate={menu ? "open" : "close"}
          className="gap-x-2 z-[999]  absolute sm:gap-y-0 gap-y-4 sm:static top-0 left-0 sm:bg-transparent bg-themeBlack/80  sm:flex-row flex-col justify-center w-full h-screen flex items-center  text-themeBlack  tracking-wider"
        >
          <div
            onClick={() => {
              setMenu(false);
            }}
            className="flex mb-6 sm:hidden  items-center gap-x-2 text-xl group dark:text-white text-themeBlack"
          >
            <SiFoodpanda className=" group-hover:-translate-x-[1px] transition-transform  group-hover:rotate-2 origin-top" />
            <Link href={"/"}>
              <a className="font-semibold tracking-wider"> PintiDev</a>
            </Link>
          </div>
          {menuRoutes.map((menu, indeks) => (
            <Link href={menu.path} key={indeks}>
              <a
                onClick={() => setMenu(false)}
                className={` hover:underline dark:text-white text-themeBlack hover:text-black underline-offset-2 px-4 py-2 dark:hover:text-white  ${
                  router.asPath == menu.path &&
                  "  hover:text-black bg-themeCyan dark:text-black  rounded "
                }`}
              >
                {menu.title}
              </a>
            </Link>
          ))}
        </motion.ul>
      </div>
      <div className="flex items-center gap-x-3">
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
        <div
          onClick={() => {
            setMenu(true);
          }}
          className="h-10 sm:hidden w-10 rounded-md flex items-center justify-center bg-themeCyan/50"
        >
          <AiOutlineMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
