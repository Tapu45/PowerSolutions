import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,       // ✅ disables _next/image optimization for static export
  },
};

export default nextConfig;
