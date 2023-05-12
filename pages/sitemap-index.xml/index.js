import { getServerSideSitemapIndex } from "next-sitemap";

const dadf = () => {};

export const getServerSideProps = async (ctx) => {
  return getServerSideSitemapIndex(ctx, [
    "https://devidd0.vercel.app/sitemap-0.xml",
    "https://devidd0.vercel.app/sitemap-blog.xml",
    "https://devidd0.vercel.app/sitemap-works.xml",
  ]);
};
export default dadf;
