import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  output: 'export',          // static export
  images: {
    unoptimized: true,       // ✅ disables _next/image optimization for static export
  },
};

export default nextConfig;
