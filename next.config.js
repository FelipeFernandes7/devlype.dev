/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NODEMAILER_USER: process.env.NODEMAILER_USER,
    NODEMAILER_PASSWORD: process.env.NODEMAILER_PASSWORD,
    KV_REST_API_READ_ONLY_TOKEN: process.env.KV_REST_API_READ_ONLY_TOKEN,
    KV_REST_API_TOKEN: process.env.KV_REST_API_TOKEN,
    KV_REST_API_URL: process.env.KV_REST_API_URL,
    KV_URL: process.env.KV_URL,
  },
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
