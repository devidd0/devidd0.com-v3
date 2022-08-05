import React from "react";
import Link from "next/link";
const SocialMediaButton = ({ link, icon, username }) => {
  return (
    <Link href={link}>
      <a
        target={"_blank"}
        className=" inline-flex gap-x-2 transition-all  hover:underline underline-offset-4 decoration-themePink rounded-md dark:text-themeCyan text-[#2C7A7B] items-center h-10 sm:px-4 px-3 hover:bg-[#2C7A7B]/20"
      >
        <span className="text-xl">{icon}</span>
        <p>{username}</p>
      </a>
    </Link>
  );
};

export default SocialMediaButton;
