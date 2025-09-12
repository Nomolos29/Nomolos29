import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.acedboard.com',
        port: '',
        pathname: '/mynav/**',
      },
      {
        protocol: 'https',
        hostname: 'www.web3bridgeafrica.com',
        port: '',
        pathname: '/_next/static/media/**',
      },
      {
        protocol: 'https',
        hostname: 'wcdigitalagency.com',
        port: '',
        pathname: '/wp-content/uploads/**',
      },
    ],
  },
};

export default nextConfig;
