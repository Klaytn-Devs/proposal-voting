/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'lh3.googleusercontent.com',
      'vercel.com',
      'picsum.photos',
      'github.com',
      'raw.githubusercontent.com',
      'i.pinimg.com',
    ],
  },
  async redirects() {
    return []
  },
}

module.exports = nextConfig
