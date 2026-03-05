import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pub-a1b5bc3bb6c74ff2adc1797e395b78dd.r2.dev",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  experimental: {
    serverActions: {
      bodySizeLimit: "3mb",
    },
  },
  allowedDevOrigins: ["hurtling-tonally-annis.ngrok-free.dev"],
};

export default nextConfig;
