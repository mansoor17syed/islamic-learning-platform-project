/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enable static exports
  basePath: '/islamic-learning-platform-project',
  images: {
    unoptimized: true, // Required for static export
  },
}

module.exports = nextConfig 