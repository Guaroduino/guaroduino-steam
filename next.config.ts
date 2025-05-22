import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/guaroduino-steam',
  assetPrefix: '/guaroduino-steam/',
  images: {
    unoptimized: true,
    loader: 'custom',
    path: '/guaroduino-steam',
  },
  trailingSlash: true,
  distDir: 'dist',
};

export default nextConfig;
