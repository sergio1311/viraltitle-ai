import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   eslint: {
    ignoreDuringBuilds: true,
  },
  // ⚠️ IGNORAR TypeScript errors
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
