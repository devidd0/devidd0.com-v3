import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";
import client from "../../helpers/client";
import BlockContent, { propTypes } from "@sanity/block-content-to-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Pre from "../../components/blog/Pre";
import { NextSeo } from "next-seo";
import moment from "moment/moment";
import imageUrlBuilder from "@sanity/image-url";
import config from "../../sanity.config";
const workdetail = () => {
  const router = useRouter();
  const [detail, setDetail] = useState();
  const builder = imageUrlBuilder(config);

  useEffect(() => {
    if (router.query.post !== undefined) {
      client
        .fetch(
          `*[slug.current == "${router.query.post}"]{
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
  }, [router.query.post]);
  const serializers = {
    types: {
      code: (props) => <Pre {...props} showCopy={true} />,
    },
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
      {detail ? (
        <>
          <NextSeo
            titleTemplate="Dev.idd0 Blog | %s"
            title={detail?.title}
            description={detail?.summary}
          />
          <h1 className="flex items-end  gap-x-1 ">
            <Link href={"/blog"}>
              <a className="text-cyan-500 dark:text-themePink hover:underline underline-offset-4">
                Blog Posts
              </a>
            </Link>
            <MdKeyboardArrowRight size={20} />
            <div className="flex items-center  gap-x-1">
              <p className="sm:text-xl text-lg font-semibold">{detail.title}</p>
              <p className=" text-xs font-semibold bg-white/50 rounded-md px-2 py-1">
                {moment(detail.publishedAt, "YYYYMMDD").fromNow()}
              </p>
            </div>
          </h1>
          <div className="dark:bg-[#ffffff14] bg-[#F5F0E8] text-center  justify-between   rounded-lg  mb-5 dark:text-white text-themeBlack w-full sm:h-12 h-16 flex items-center px-8">
            <p>
              This Blog Post Was Written By <b>{detail.authorName}</b>
            </p>
            <img
              className="h-12 w-12 rounded-full overflow-hidden object-cover flex-shrink-0"
              src={builder.image(detail.authorImage).url()}
              alt={detail.authorName}
            />
          </div>
          <div className="w-full h-40 relative overflow-hidden rounded-md">
            <Image
              src={detail.mainImage.asset.url}
              className=" object-cover"
              fill
            />
          </div>
          <BlockContent
            blocks={detail.body}
            projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
            dataset="production"
            serializers={serializers}
            className={"  sm:prose prose-sm dark:prose-invert  mx-auto"}
          />
        </>
      ) : (
        <img src="/loading.svg" className="mx-auto " />
      )}
    </motion.main>
  );
};

export default workdetail;
