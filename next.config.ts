import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "skillicons.dev" },
      { protocol: "https", hostname: "github-readme-stats.vercel.app" },
      { protocol: "https", hostname: "streak-stats.demolab.com" },
      { protocol: "https", hostname: "raw.githubusercontent.com" },
      { protocol: "https", hostname: "capsule-render.vercel.app" },
      { protocol: "https", hostname: "readme-typing-svg.demolab.com" },
    ],
  },
};

export default nextConfig;
