/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [],
    formats: ['image/avif', 'image/webp'],
  },
  sassOptions: {
    includePaths: ['./src/styles'],
  },
}

module.exports = nextConfig
