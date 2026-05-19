/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  compress: true,
  poweredByHeader: false,
  trailingSlash: true,
  // Configuración de webpack para optimización
  webpack: (config, { isServer, dev }) => {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
      };
    }
    
    // Optimización de bundles mejorada para producción
    if (!dev) {
      config.optimization = {
        ...config.optimization,
        moduleIds: 'deterministic',
        runtimeChunk: 'single',
        splitChunks: {
          chunks: 'all',
          cacheGroups: {
            default: false,
            vendors: false,
            // React y React-DOM separados
            react: {
              test: /[\\/]node_modules[\\/](react|react-dom|scheduler)[\\/]/,
              name: 'react',
              chunks: 'all',
              priority: 20,
              enforce: true,
            },
            // React Icons separado - solo cargar cuando se necesite
            reactIcons: {
              test: /[\\/]node_modules[\\/]react-icons[\\/]/,
              name: 'react-icons',
              chunks: 'async',
              priority: 10,
              enforce: true,
            },
            // Next.js framework
            framework: {
              test: /[\\/]node_modules[\\/](next)[\\/]/,
              name: 'framework',
              chunks: 'all',
              priority: 15,
              enforce: true,
            },
            // Otros vendors
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendors',
              chunks: 'async',
              priority: 5,
              minChunks: 2,
            },
          },
        },
      };
    }
    
    return config;
  },
  // Configuración experimental simplificada para export
  experimental: {
    // Removido optimizeCss ya que no es compatible con output: export
  },
};

module.exports = nextConfig;