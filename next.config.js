/** @type {import('next').NextConfig} */
const nextConfig = {
  siteUrl: `${process.env.APP_URL}`,
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
