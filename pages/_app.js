import "../styles/globals.css";
import Header from "../components/layout/Header";
import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "next-themes";

import Footer from "../components/layout/Footer";

import { Toaster } from "react-hot-toast";
import { DefaultSeo } from "next-seo";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [studio, setStudio] = useState(false);
  useEffect(() => {
    if (router.asPath.includes("/studio")) {
      setStudio(true);
    } else {
      setStudio(false);
    }
  }, [router.asPath]);
  return (
    <AnimatePresence exitBeforeEnter={true}>
      <DefaultSeo
        titleTemplate="Dev.idd0 | %s "
        title="Home"
        canonical="https://devidd0.com"
        additionalMetaTags={[
          {
            property: "keywords",
            content:
              "dev.idd0, Who is Dev.idd0 , Aziz Imranzade, Who is Aziz Imranzade",
          },
          {
            property: "author",
            content: "Dev.idd0, deviddocontact@gmail.com",
          },
        ]}
        description="Hello, I'm Dev.idd0 and this is my personal web page. You can find out about who I am here. You can read my blogs in the blog section. I also post my Podcasts here "
      />
      <ThemeProvider attribute="class">
        <div
          className={`${
            studio ? null : "flex"
          } flex-col  font-sans  items-center  dark:bg-themeBlack bg-[#F0E7DB] min-h-screen`}
        >
          <Toaster position="top-right" />

          {!studio && <Header />}
          <Component {...pageProps} />
          {!studio && <Footer />}
        </div>
      </ThemeProvider>
    </AnimatePresence>
  );
}

export default MyApp;
