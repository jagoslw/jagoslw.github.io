import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';
const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  reactCompiler: true,  
  reactStrictMode: true,
  images: {
    unoptimized: true, // GitHub Pages can't handle Next.js image optimization
  },
  assetPrefix: isProd ? '' : '',
  basePath: isProd ? '' : '',
};



module.exports = nextConfig;

export default nextConfig;
