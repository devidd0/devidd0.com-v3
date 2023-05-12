import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";
import client from "../../helpers/client";
import BlockContent, { propTypes } from "@sanity/block-content-to-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Pre from "../../components/blog/Pre";
import Head from "next/head";
import { NextSeo } from "next-seo";
const workdetail = () => {
  const router = useRouter();
  const [detail, setDetail] = useState();
  useEffect(() => {
    if (router.query.work !== undefined) {
      client
        .fetch(
          `*[slug.current == "${router.query.work}"]{
          body,
          title,
          summary,
          publishedAt,
          mainImage{
            asset->{
              _id,
              url
            }
          },
          _id,
          slug,
          "authorName":author->name,
          "authorImage":author->image
        }`
        )
        .then((data) => {
          setDetail(data[0]);
        });
    }
  }, [router.query.work]);
  const serializers = {
    marks: {
      link: (props) => (
        <a
          href={props.mark.href}
          target={"_blank"}
          className="dark:text-themePink text-cyan-500"
        >
          {props.children}
        </a>
      ),
    },
    types: {
      code: (props) => <Pre {...props} showCopy={true} />,
    },
  };
  return (
    <motion.main
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 1,
        type: "tween",
      }}
      className="sm:w-[40rem] min-h-screen w-full px-6 sm:px-0 flex flex-col gap-y-6 "
    >
      <NextSeo
        titleTemplate="Works | %s"
        title={detail?.title}
        description={detail?.summary}
      />
      {detail ? (
        <>
          <NextSeo
            titleTemplate="Works | %s"
            title={detail?.title}
            description={detail?.summary}
          />
          <h1 className="flex items-end  gap-x-1 ">
            <Link href={"/works"}>
              <a className="text-cyan-500 dark:text-themePink hover:underline underline-offset-4">
                Works
              </a>
            </Link>
            <MdKeyboardArrowRight size={20} />
            <div className="flex items-center  gap-x-1">
              <p className="sm:text-2xl text-lg font-semibold">
                {detail.title}
              </p>
              <p className=" text-xs font-semibold bg-white/50 rounded-md px-2 py-1">
                {detail.publishedAt.slice(0, 4)}
              </p>
            </div>
          </h1>
          <div className="w-full h-40 relative overflow-hidden rounded-md">
            <Image
              src={detail.mainImage.asset.url}
              objectFit="cover"
              layout="fill"
              objectPosition={"center"}
            />
          </div>
          <BlockContent
            blocks={detail.body}
            projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
            dataset="production"
            serializers={serializers}
            className={"sm:prose prose-sm  dark:prose-invert"}
          />
        </>
      ) : (
        <img src="/loading.svg" className="mx-auto " />
      )}
    </motion.main>
  );
};

export default workdetail;
