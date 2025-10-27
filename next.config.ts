import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
      {
        protocol: 'https',
        hostname: 'seeklogo.com',
      },
      {
        protocol: 'https',
        hostname: 'iconape.com',
      },
      {
        protocol: 'https',
        hostname: '**.facebook.com',
      },
      {
        protocol: 'https',
        hostname: '**.fbcdn.net',
      },
    ],
  },
};

export default nextConfig;
