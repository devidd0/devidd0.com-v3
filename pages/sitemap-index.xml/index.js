import { getServerSideSitemapIndex } from "next-sitemap";

const dadf = () => {};

export const getServerSideProps = async (ctx) => {
  return getServerSideSitemapIndex(ctx, [
    "https://pintidev.vercel.app/sitemap-0.xml",
    "https://pintidev.vercel.app/sitemap-blog.xml",
    "https://pintidev.vercel.app/sitemap-works.xml",
  ]);
};
export default dadf;
