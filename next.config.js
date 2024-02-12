/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'vercel.com',
            port: '',
          },
        ],
      },
}

module.exports = nextConfig
