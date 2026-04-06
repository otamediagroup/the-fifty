/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.prod.website-files.com',
        pathname: '/69889742baae82d9f9911b3b/**',
      },
    ],
  },
}

module.exports = nextConfig
