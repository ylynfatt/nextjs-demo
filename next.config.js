/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: "**.tmdb.org",
      },
    ],
  },
}

module.exports = nextConfig
