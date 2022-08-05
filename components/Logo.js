import React from "react";
import { SiFoodpanda } from "react-icons/si";
import Link from "next/link";
const Logo = () => {
  return (
    <div className="flex items-center gap-x-2 text-xl group dark:text-white text-themeBlack">
      <img src="/pandafavicon.ico" className="h-8 w-8"/>
      <Link href={"/"}>
        <a className="font-semibold tracking-wider"> PintiDev</a>
      </Link>
    </div>
  );
};

export default Logo;
