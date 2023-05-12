import React from "react";
import { BsCodeSlash } from "react-icons/bs";
import Link from "next/link";
const Logo = () => {
  return (
    <div className="flex items-center gap-x-2 text-xl group dark:text-white text-themeBlack">
      <BsCodeSlash />
      <Link href={"/"}>
        <a className="font-semibold tracking-wider">Dev.Idd0</a>
      </Link>
    </div>
  );
};

export default Logo;
