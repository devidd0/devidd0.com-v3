import { getServerSideSitemap } from "next-sitemap";
import client from "../../helpers/client";
const BlogSiteMap = () => {};
export const getServerSideProps = async (ctx) => {
  const fields = [];
  await client
    .fetch(
      `*[_type=="post"]{
        slug,
        publishedAt
      }`
    )
    .then((data) => {
      if (data) {
        data.forEach((item) => {
          fields.push({
            loc: `https://pintidev.vercel.app/blog/${item.slug.current}`,
            lastmod: new Date().toISOString(),
          });
        });
      }
    });
  return await getServerSideSitemap(ctx, fields);
};
export default BlogSiteMap;
