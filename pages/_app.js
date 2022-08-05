import "../styles/globals.css";
import Header from "../components/layout/Header";
import { AnimatePresence } from "framer-motion";
import * as THREE from "three";
import NoSsr from "../helpers/NoSsr";
import { Canvas } from "@react-three/fiber";
import Room from "../models/Room";
import { Suspense, useRef } from "react";
import { ThemeProvider } from "next-themes";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Footer from "../components/layout/Footer";
import {
  Loader,
  Plane,
  PresentationControls,
  useHelper,
} from "@react-three/drei";
import { Toaster } from "react-hot-toast";
import Head from "next/head";
function MyApp({ Component, pageProps }) {
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
        <Head>
          <meta
            name="google-site-verification"
            content="bMk_eZ5tdYPCsR7m8Jvs5_eYmecvxclpwXLolYK1f2U"
          />
          <meta
            name="keywords"
            content="PintiDevAziz, PintiDev, Aziz Imranzade,PintiDeveloper,Aziz,pintdev blog,PintBlog"
          />
          <meta name="author" content="Aziz Imranzade" />
          <meta
            name="description"
            content="PintiDev Official web page personal web page My works Blog posts and other stuff"
          />
          <link
            rel="shortcut icon"
            href="/pandafavicon.ico"
            type="image/x-icon"
          />
          
        </Head>
        <Canvas
          shadows={true}
          gl={{ antialias: true }}
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
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;
  return (
    <AnimatePresence exitBeforeEnter={true}>
      <ThemeProvider attribute="class">
        <div
          className={`flex flex-col  font-sans w-full items-center  dark:bg-themeBlack bg-[#F0E7DB] min-h-screen`}
        >
          <Toaster position="top-right" />
          <div className="h-60 sm:h-80 sm:w-[30rem] w-full  mt-20 flex-shrink-0 ">
            <NoSsr>
              <ModelScene />
            </NoSsr>
          </div>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </div>
      </ThemeProvider>
    </AnimatePresence>
  );
}

export default MyApp;
