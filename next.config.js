/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'ibb.co',
          },
        ],
      },
}

module.exports = nextConfig
