/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/guaroduino-steam',
  images: {
    unoptimized: true
  },
  trailingSlash: true
};

module.exports = nextConfig;
