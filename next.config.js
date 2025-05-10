/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enable static exports
  images: {
    unoptimized: true, // Required for static export
  },
  basePath: '/islamic-learning-platform-project',
  assetPrefix: '/islamic-learning-platform-project/',
  trailingSlash: true,
}

module.exports = nextConfig 