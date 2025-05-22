import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  basePath: '/guaroduino-steam',
  assetPrefix: '/guaroduino-steam/',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
