/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Necesario si usas el componente <Image />
  },
};

module.exports = nextConfig;
