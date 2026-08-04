/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://nomolos29.vercel.app/',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: [
    '/api/*',
    '/coming-soon',
  ],
};