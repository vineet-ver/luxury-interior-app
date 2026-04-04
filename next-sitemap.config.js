/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.itss.co.in',
  generateRobotsTxt: true,

  sitemapSize: 7000,

  changefreq: 'weekly',
  priority: 0.7,

  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },

  exclude: ['/admin/*'],

  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date().toISOString(),
    };
  },

  // 🔥 BLOGS ADD KARNE KA MAIN FIX
  additionalPaths: async (config) => {
    const blogPaths = [
      '/blog/office-interior-design-ideas',
      '/blog/biophilic-design',
      '/blog/luxury-interior-design-guide',
      '/blog/interior-design-cost-india',
      '/blog/design-principles',
      '/blog/interior-design-courses-india',
      '/blog/designer-vs-decorator',
      '/blog/choose-designer',
      '/blog/home-interior-design-ideas',
      '/blog/office-cabin-interior-design',
      '/blog/small-office-interior-design-ideas',
      '/blog/interior-design-trends-2026',
    ];

    return blogPaths.map((path) => ({
      loc: path,
      changefreq: 'weekly',
      priority: 0.8,
      lastmod: new Date().toISOString(),
    }));
  },
};