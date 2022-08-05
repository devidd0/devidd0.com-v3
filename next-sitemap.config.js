module.exports = {
  siteUrl: "https://pintidev.vercel.app",
  generateRobotsTxt: true,
  exclude: [
    "/sitemap-blog.xml",
    "/sitemap-works.xml",
    "/sitemap-index.xml",
  ],
  robotsTxtOptions: {
    additionalSitemaps: [
      "https://pintidev.vercel.app/sitemap-blog.xml",
      "https://pintidev.vercel.app/sitemap-works.xml",
    ],
  },
};
