/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.itss.co.in',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,

  // Exclude admin, duplicate Home route, and dynamic catch-all
  exclude: [
    '/admin',
    '/admin/*',
    '/Home',
    '/services-delhi',
    '/commercial-interior-designer/*',
  ],

  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: '*', disallow: ['/admin', '/admin/', '/Home'] },
    ],
    additionalSitemaps: [],
  },

  // Custom priority per page type
  transform: async (config, path) => {
    // Homepage — highest priority
    if (path === '/') {
      return { loc: path, changefreq: 'daily', priority: 1.0, lastmod: new Date().toISOString() };
    }

    // Core service pages — very high
    if (path.startsWith('/services/')) {
      return { loc: path, changefreq: 'weekly', priority: 0.9, lastmod: new Date().toISOString() };
    }

    // City landing pages — high
    if (path.startsWith('/office-interior-contractor-')) {
      return { loc: path, changefreq: 'weekly', priority: 0.9, lastmod: new Date().toISOString() };
    }

    // Blog posts — medium-high
    if (path.startsWith('/blog/')) {
      return { loc: path, changefreq: 'monthly', priority: 0.8, lastmod: new Date().toISOString() };
    }

    // About, clients, portfolio — medium
    if (['/about', '/clients', '/portfolio', '/gallery'].includes(path)) {
      return { loc: path, changefreq: 'monthly', priority: 0.7, lastmod: new Date().toISOString() };
    }

    // Contact — medium
    if (path === '/contact') {
      return { loc: path, changefreq: 'monthly', priority: 0.7, lastmod: new Date().toISOString() };
    }

    return { loc: path, changefreq: 'monthly', priority: 0.6, lastmod: new Date().toISOString() };
  },
};
