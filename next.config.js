/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/guaroduino-steam',
  images: {
    unoptimized: true,
  },
  // Ensure all routes are generated at build time
  trailingSlash: true,
};

module.exports = nextConfig;
