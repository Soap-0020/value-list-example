import type { NextConfig } from "next";

// Make sure you only allow images from correct places

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "*",
      },
    ],
  },
};

export default nextConfig;
