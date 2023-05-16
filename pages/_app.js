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
        title="Ev"
        canonical="https://devidd0.com"
        additionalMetaTags={[
          {
            property: "keywords",
            content:
              "Dev.idd0, Dev.idd0 kimdir, Aziz İmranzadə, Əziz İmranzadə kimdir",
          },
          {
            property: "author",
            content: "Dev.idd0, deviddocontact@gmail.com",
          },
        ]}
        description="Salam, mən Dev.idd0 və bu mənim şəxsi veb səhifəmdir. Mənim kim olduğumu buradan öyrənə bilərsiniz. Bloq bölməsində bloqlarımı oxuya bilərsiniz. Podkastlarımı da burada yerləşdirirəm"
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
