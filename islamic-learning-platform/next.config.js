/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enable static exports
  basePath: process.env.NODE_ENV === 'production' ? '/islamic-learning-platform' : '', // Add base path for GitHub Pages
  images: {
    unoptimized: true, // Required for static export
  },
}

module.exports = nextConfig 