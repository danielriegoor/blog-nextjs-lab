import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // options here
  // experimental: {
  //   useCache: true,
  // },
  cacheLife: {
    seconds: {
      stale: 0,
      revalidate: 10,
      expire: 10,
    },
  },
  reactCompiler: true,
};

export default nextConfig;
