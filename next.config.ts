import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    // Prevents Turbopack from inferring an incorrect monorepo root
    // when other lockfiles exist outside this project directory.
    root: __dirname,
  },
};

export default nextConfig;
