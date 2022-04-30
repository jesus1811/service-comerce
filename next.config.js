/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["page.tsx", "page.ts", "page.jsx", "page.js"],
  images: {
    domains: ['firebasestorage.googleapis.com','localhost:3000'],
  },
};

module.exports = nextConfig;
