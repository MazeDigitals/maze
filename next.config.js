/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  siteUrl: `${process.env.APP_URL}`,
  // experimental: {
  //   appDir: true,
  // },
}

module.exports = nextConfig
