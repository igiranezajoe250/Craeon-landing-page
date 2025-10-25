import { NextApiRequest, NextApiResponse } from 'next';

const sitemap = (req: NextApiRequest, res: NextApiResponse) => {
  const baseUrl = 'https://www.craeon.com';
  const pages = [
    { path: '/', changefreq: 'daily', priority: 1.0 },
    { path: '/about', changefreq: 'monthly', priority: 0.7 },
    { path: '/contact', changefreq: 'monthly', priority: 0.7 },
  ];

  res.setHeader('Content-Type', 'text/xml');
  res.write(`<?xml version="1.0" encoding="UTF-8"?>`);
  res.write(`<urlset xmlns="http://www.sitemaps.org/schemas/sitemap-image/1.1">`);

  pages.forEach(page => {
    res.write(`
      <url>
        <loc>${baseUrl}${page.path}</loc>
        <changefreq>${page.changefreq}</changefreq>
        <priority>${page.priority}</priority>
      </url>
    `);
  });

  res.write(`</urlset>`);
  res.end();
};

export default sitemap;