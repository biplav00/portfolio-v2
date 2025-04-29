import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.jsdelivr.net',
      },
      {
        protocol: 'https',
        hostname: 'playwright.dev',
      },
      {
        protocol: 'https',
        hostname: 'jmeter.apache.org',
      },
      {
        protocol: 'https',
        hostname: 'git-scm.com',
      },
      {
        protocol: 'https',
        hostname: 'github.githubassets.com',
      },
    ],
  },

  
};

export default nextConfig;
