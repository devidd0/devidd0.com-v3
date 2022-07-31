import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";
import client from "../../helpers/client";
import BlockContent, { propTypes } from "@sanity/block-content-to-react";
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
          excerpt,
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
        .then((data) => setDetail(data[0]));
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
  };
  return (
    <main className="w-[40rem] flex flex-col gap-y-6 ">
      {detail ? (
        <>
          <h1 className="flex items-end  gap-x-1 ">
            <Link href={"/works"}>
              <a className="text-cyan-500 dark:text-themePink hover:underline underline-offset-4">
                Works
              </a>
            </Link>
            <MdKeyboardArrowRight size={20} />
            <div className="flex items-center  gap-x-1">
              <p className="text-2xl font-semibold">{detail.title}</p>
              <p className=" text-xs font-semibold bg-white/50 rounded-md px-2 py-1">
                {detail.publishedAt.slice(0, 4)}
              </p>
            </div>
          </h1>
          <BlockContent
            blocks={detail.body}
            projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
            dataset="production"
            serializers={{ marks: serializers.marks }}
            className={"prose dark:prose-invert"}
          />
        </>
      ) : (
        <img src="/loading.svg" className="mx-auto " />
      )}
    </main>
  );
};

export default workdetail;
