/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/islamic-learning-platform-project',
  assetPrefix: '/islamic-learning-platform-project/',
  output: 'standalone',
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig 