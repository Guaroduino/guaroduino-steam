import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS || false;
const repo = 'guaroduino-steam';

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  basePath: isGithubActions ? `/${repo}` : '',
  assetPrefix: isGithubActions ? `/${repo}/` : '',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    return config;
  },
};

export default nextConfig;
