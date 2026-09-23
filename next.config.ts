import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  experimental: {
    workerThreads: false,
    cpus: 2,
  },
  allowedDevOrigins: ['192.168.1.23'],
};

export default nextConfig;
