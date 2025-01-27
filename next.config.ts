// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'unsplash.com'
      },
      {
        protocol: 'https',
        hostname: 'i.pinimg.com'
      }
    ],
  },
  pageExtensions: ['tsx', 'ts'],
  // Remove middlewarePath as it's not a valid Next.js config option
};

export default nextConfig;