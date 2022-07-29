import Link from "next/link";
import { useRouter } from "next/router";
import React, { Suspense } from "react";
import { useState } from "react";
import { SiFoodpanda } from "react-icons/si";
import { BsSun } from "react-icons/bs";
import { MdOutlineDarkMode } from "react-icons/md";
import { Canvas } from "@react-three/fiber";
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
  console.log(router.asPath);

  const [mode, setMode] = useState("dark");


  return (
    <header className="flex backdrop-blur-md items-center px-80 h-16  justify-between text-white font-mono  z-[999]  fixed w-full top-0">
      <div className="flex gap-x-10">
        <div className="flex items-center gap-x-2 text-xl group">
          <SiFoodpanda className=" group-hover:-translate-x-[1px] transition-transform  group-hover:rotate-2 origin-top" />
          <Link href={"/"}>
            <a className="font-semibold tracking-wider"> PintiDev</a>
          </Link>
        </div>
        <ul className="gap-x-6 flex items-center  tracking-wider">
          {menuRoutes.map((menu, indeks) => (
            <Link href={menu.path} key={indeks}>
              <a
                className={` hover:underline underline-offset-2 hover:text-white text-gray-200 ${
                  router.asPath == menu.path && "underline text-white"
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
          if (mode == "dark") {
            setMode("light");
          } else {
            setMode("dark");
          }
        }}
        className={`${
          mode == "dark" && "bg-themeYellow text-black"
        } rounded-md cursor-pointer flex items-center justify-center transition-all h-10 w-10`}
      >
        {mode == "dark" ? <BsSun /> : <MdOutlineDarkMode />}
      </div>
    </header>
  );
};

export default Header;
