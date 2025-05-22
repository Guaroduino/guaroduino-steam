/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/guaroduino-steam',
  images: {
    unoptimized: true,
  },
  // Ensure all routes are generated at build time
  trailingSlash: true,
  // Handle markdown files
  webpack: (config) => {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader'
    });
    return config;
  }
};

module.exports = nextConfig;
