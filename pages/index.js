import React, { Suspense, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import Room from "../models/Room";
import {
  Loader,
  Plane,
  PresentationControls,
  useHelper,
} from "@react-three/drei";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import * as THREE from "three";
import NoSsr from "../helpers/NoSsr";
import {
  AiFillGithub,
  AiOutlineInstagram,
  AiOutlineYoutube,
} from "react-icons/ai";
import { FiFacebook, FiTwitter } from "react-icons/fi";
import { MdKeyboardArrowRight } from "react-icons/md";
const Index = () => {
  //!Lights
  const Lights = () => {
    const pointRef = useRef();
    useHelper(pointRef, THREE.PointLightHelper);
    return (
      <>
        <ambientLight intensity={0.2} />
        <spotLight
          ref={pointRef}
          position={[0, 10, -4]}
          intensity={0.4}
          args={[new THREE.Color("#FBD38D"), 0.4, 0, (Math.PI / 180) * 30]}
        />
      </>
    );
  };

  const ModelScene = () => {
    return (
      <>
        <Canvas
          shadows={true}
          camera={{ fov: 90, near: 0.1, far: 1000, position: [0, 7, 6] }}
        >
          <Lights />
          <Suspense fallback={null}>
            <PresentationControls
              snap={true}
              polar={[0, 0]}
              azimuth={[-(Math.PI / 180) * 60, (Math.PI / 180) * 45]}
            >
              <Room scale={0.1} position={[0, -1, 0]} />
            </PresentationControls>
            <Plane
              args={[15, 10]}
              receiveShadow={true}
              rotation={[-Math.PI / 2, 0, 0]}
              position={[0, -1, 0]}
            >
              <meshStandardMaterial recieveShadow={true} transparent={true} />
            </Plane>
          </Suspense>
        </Canvas>
        <Loader />
      </>
    );
  };
  //Social Media array
  const [socialMedia] = useState([
    {
      username: "@PintiDevAziz",
      link: "https://github.com/pintidevaziz",
      icon: <AiFillGithub />,
    },
    {
      username: "@PintiDevAziz",
      link: "https://instagram.com/pintidevaziz",
      icon: <AiOutlineInstagram />,
    },
    {
      username: "@PintiDevAziz",
      link: "https://www.facebook.com/profile.php?id=100077839123950",
      icon: <FiFacebook />,
    },
    {
      username: "@PintiDevAziz",
      link: "https://twitter.com/pintidevaziz",
      icon: <FiTwitter />,
    },
    {
      username: "@PintiDevAziz",
      link: "https://www.youtube.com/channel/UCpERt5A7SNd7s5XNAj2mGmw",
      icon: <AiOutlineYoutube />,
    },
  ]);
  const animations = {
    initial: { opacity: 0, y: 100 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -100 },
  };
  return (
    <motion.div
      variants={animations}
      initial={"initial"}
      animate={"animate"}
      exit={"exit"}
      className=" bg-[#202023] pt-14 px-40 flex  flex-col items-center font-mono"
    >
      <div className="h-[30rem] w-[40rem] mt-10 flex-shrink-0 overflow-hidden">
        <NoSsr>
          <ModelScene />
        </NoSsr>
      </div>
      <div className="-translate-y-[4rem] w-[35rem]">
        <div className="bg-[#ffffff14] rounded-lg mb-5 text-white w-full h-10 flex items-center justify-center">
          Hello I am Aziz Front End Developer From Azerbaijan
        </div>
        <div className="text-white flex mb-6  w-full items-start justify-between">
          <div>
            <h2 className="text-3xl tracking-widest font-semibold mb-1">
              Aziz Imranzade
            </h2>
            <p className="text-gray-300">
              Front End Developer(Developer/Gamer)
            </p>
          </div>
          <div className=" w-28 h-28 relative rounded-full overflow-hidden border-2 border-gray">
            <Image src="/avatar.jpg" layout="fill" />
          </div>
        </div>
        <div className="my-7">
          <h2 className="text-gray-200 underline underline-offset-8  decoration-gray-400 font-semibold text-2xl mb-3">
            Work
          </h2>
          <p className="text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
            voluptatibus pariatur sapiente in iure deserunt ab tempora
            veritatis, sequi architecto consectetur, facilis perspiciatis
            accusamus laborum, hic non tempore. Fugit, mollitia!
          </p>
          <Link href={"/works"}>
            <a className="mt-2 text-[#333] hover:bg-themeCyan/ transition-colors gap-x-2 group w-36 h-10 font-semibold rounded  inline-flex items-center justify-center bg-themeCyan">
              <p>My Works</p>
              <MdKeyboardArrowRight className="text-xl group-hover:translate-x-1 transition-transform" />
            </a>
          </Link>
        </div>
        <div className="my-7">
          <h2 className="text-gray-200 underline underline-offset-8  decoration-gray-400 font-semibold text-2xl mb-4">
            About Me
          </h2>
          <div className="relative w-full  h-[15rem] ">
            <Image src="/carbon.svg" layout={"fill"} />
          </div>
        </div>
        <div className="my-7">
          <h2 className="text-gray-200 underline underline-offset-8  decoration-gray-400 font-semibold text-2xl mb-4">
            Social Media
          </h2>

          <ul className="flex w-full   gap-y-2 flex-wrap">
            {socialMedia &&
              socialMedia.map((item, indeks) => (
                <li className=" list-none" key={indeks}>
                  <Link href={item.link} target={"_blank"}>
                    <a className=" inline-flex gap-x-2 transition-all  hover:underline underline-offset-4 decoration-themePink rounded-md text-themeCyan items-center h-10 px-4 hover:bg-themeCyan/20">
                      <span className="text-xl">{item.icon}</span>
                      <p>{item.username}</p>
                    </a>
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default Index;
