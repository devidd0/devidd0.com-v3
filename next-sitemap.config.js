module.exports = {
  siteUrl: "https://azizimranzade.vercel.app",
  generateRobotsTxt: true,
  exclude: ["/sitemap-blog.xml", "/sitemap-works.xml", "/sitemap-index.xml"],
  robotsTxtOptions: {
    additionalSitemaps: [
      "https://azizimranzade.vercel.app/sitemap-blog.xml",
      "https://azizimranzade.vercel.app/sitemap-works.xml",
    ],
  },
};
