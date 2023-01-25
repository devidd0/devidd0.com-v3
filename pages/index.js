import React, { useState } from "react"

import Image from "next/image"
import { motion } from "framer-motion"
import { AiFillGithub, AiOutlineInstagram } from "react-icons/ai"
import { FiFacebook, FiTwitter } from "react-icons/fi"
import { MdKeyboardArrowRight } from "react-icons/md"
import Typewriter from "typewriter-effect"
import SocialMediaButton from "../components/index/socialMediaButton"
import Head from "next/head"
import getAge from "../helpers/getAge"
const Index = () => {
  //Social Media array
  const [socialMedia] = useState([
    {
      username: "@PintiDev",
      link: "https://github.com/pintidev",
      icon: <AiFillGithub />
    },
    {
      username: "@PintiDev",
      link: "https://instagram.com/pintidev",
      icon: <AiOutlineInstagram />
    },
    {
      username: "@PintiDev",
      link: "https://www.facebook.com/pintidev/",
      icon: <FiFacebook />
    },
    {
      username: "@PintiDev",
      link: "https://twitter.com/pintidev",
      icon: <FiTwitter />
    }
  ])
  const animations = {
    initial: { opacity: 0, y: 100 },
    animate: { opacity: 1, y: 0 }
  }
  return (
    <motion.div
      variants={animations}
      initial={"initial"}
      animate={"animate"}
      transition={{
        duration: 1,
        type: "tween"
      }}
      exit={"exit"}
      className=" sm:w-[40rem] w-full px-8 sm:px-0  ">
      <Head>
        <title>PintiDev | Home</title>
        <meta name="description" content="Aziz Imranzade (PintiDev) Front End Developer Home Page About PintiDev" />
        <meta name="og:title" content="PintiDev Official Web Page" />
        <meta name="og:url" content="https://pintidev.vercel.app/" />
      </Head>
      <div className="dark:bg-[#ffffff14] bg-[#F5F0E8] text-center px-3 sm:px-0   rounded-lg  mb-5 dark:text-white text-themeBlack w-full sm:h-12 h-14 flex items-center justify-center">
        <p>Hello I am Aziz Front End Developer From Azerbaijan</p>
      </div>
      <div className="dark:text-white  flex sm:flex-row flex-col items-center mb-6  gap-y-4 sm:gap-y-0  w-full sm:items-start justify-between">
        <div>
          <h1 className="sm:text-3xl text-xl tracking-widest font-semibold mb-1">Aziz Imranzade</h1>
          <p>Front End Developer(Developer/Gamer)</p>
        </div>
        <div className=" sm:w-28 sm:h-28 w-24 flex-shrink-0 h-24 relative rounded-full overflow-hidden border-2 border-gray">
          <Image src="/avatar.jpg" layout="fill" objectFit="contain" alt="PintiDev Avatar" />
        </div>
      </div>
      <div className="my-10">
        <h2 className=" underline underline-offset-8  decoration-gray-400 font-semibold sm:text-2xl text-xl mb-3">Work</h2>
        <p>
          I haven't worked with any big company so far. This is probably due to my age. But I have always tried my best to develop myself as a freelancer, I have prepared various
          freelance projects, which I had a lot of fun while coding, and I learned a lot. You can contact me on my social media accounts and make job offers.
        </p>
        <a
          download={"PintiDevCv"}
          href="/PintiDevAzizCv.pdf"
          className="mt-3 text-[#333] hover:bg-themeCyan/ transition-colors gap-x-2 group w-36 h-10 font-semibold rounded  inline-flex items-center justify-center bg-themeCyan">
          <span>My Resume</span>
          <MdKeyboardArrowRight className="text-xl group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
      <div className="my-7">
        <h2 className=" underline underline-offset-8  decoration-gray-400 font-semibold sm:text-2xl text-xl mb-4">About Me</h2>
        <div className="relative w-full   sm:h-[15rem] h-[10rem] ">
          <Typewriter
            options={{
              strings: [
                `I am Aziz Imranzade (Pinti.dev) from Azerbaijan 🇦🇿 I am ${getAge(
                  "04/4/2006"
                )} and love with Technology 🚀 Computers have been my interest since childhood 💻 And Right now
              I am Software Developer My favorite hobbies are spend time with my Love and Playing video games`
              ],
              autoStart: true,
              loop: true
            }}
          />
        </div>
      </div>
      <div className="my-14">
        <h2 className=" underline underline-offset-8  decoration-gray-400 font-semibold sm:text-2xl text-lg mb-4">Social Media</h2>

        <ul className="flex w-full   sm:gap-y-2 gap-y-1 flex-wrap">
          {socialMedia &&
            socialMedia.map((item, indeks) => (
              <li className=" list-none" key={indeks}>
                <SocialMediaButton link={item.link} icon={item.icon} username={item.username} />
              </li>
            ))}
        </ul>
      </div>
    </motion.div>
  )
}

export default Index
