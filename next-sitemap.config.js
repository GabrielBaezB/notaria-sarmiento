// next-sitemap.config.js
module.exports = {
  siteUrl: 'https://notariasarmiento.cl',
  generateRobotsTxt: false,
  generateIndexSitemap: false, // IMPORTANTE: false para no crear index
  sitemapSize: 50000, // Un valor alto para que no divida el sitemap
  exclude: ['/404', '/indice-vehiculos'],
  changefreq: 'monthly',
  priority: 0.7,
  transform: async (config, path) => {
    // Página principal con mayor prioridad
    if (path === 'https://notariasarmiento.cl/') {
      return {
        loc: path,
        changefreq: 'weekly',
        priority: 1.0,
        lastmod: new Date().toISOString(),
      }
    }
    // Páginas de servicios
    if (path.includes('/servicios/')) {
      return {
        loc: path,
        changefreq: 'monthly',
        priority: 0.8,
        lastmod: new Date().toISOString(),
      }
    }
    // Default
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: new Date().toISOString(),
    }
  },
}