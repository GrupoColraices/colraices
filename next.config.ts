import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "blog.colraices.com",
      },
    ],
  },
};

export default nextConfig;