import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  eslint: {
    // ESLint runs separately — don't block the Vercel production build
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'i.ytimg.com' },
    ],
  },
};

export default nextConfig;
