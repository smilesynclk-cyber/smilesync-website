/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Important for static deployment
  images: {
    unoptimized: true,  // Required for Cloudflare Pages
  },
};

export default nextConfig;