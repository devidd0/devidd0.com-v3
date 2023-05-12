module.exports = {
  siteUrl: "https://devidd0.vercel.app",
  generateRobotsTxt: true,
  exclude: ["/sitemap-blog.xml", "/sitemap-works.xml", "/sitemap-index.xml"],
  robotsTxtOptions: {
    additionalSitemaps: [
      "https://devidd0.vercel.app/sitemap-blog.xml",
      "https://devidd0.vercel.app/sitemap-works.xml",
    ],
  },
};
