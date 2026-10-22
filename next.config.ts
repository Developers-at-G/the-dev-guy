import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  images: {
    // Local assets only — avoid open remotePatterns
    formats: ["image/avif", "image/webp"],
  },
  compiler: {
    removeConsole:
      process.env.NODE_ENV === "production"
        ? { exclude: ["error", "warn"] }
        : false,
  },
  compress: true,
  experimental: {
    optimizePackageImports: ["framer-motion"],
  },
  outputFileTracingRoot: path.join(__dirname),
};

export default nextConfig;
