/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  siteUrl: `${process.env.APP_URL}`,
  experimental: {
    outputStandalone: true
  }
}

module.exports = nextConfig
