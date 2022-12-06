import React from "react";
import SocialMediaButton from "../index/socialMediaButton";
import { AiOutlineWarning } from "react-icons/ai";
import Logo from "../Logo";
const Footer = () => {
  return (
    <div className=" bg-[#F5F0E8]/60 mt-6 dark:bg-transparent justify-between  h-14 flex-shrink-0 w-full sm:px-80 px-8 flex items-center ">
      <Logo />
      <p>🚀 🌕 ❤️‍🔥</p>
      <div>
        <div></div>
        <SocialMediaButton
          link={"/credits"}
          icon={<AiOutlineWarning />}
          username="Credits"
        />
      </div>
    </div>
  );
};

export default Footer;
