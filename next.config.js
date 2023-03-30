/** @type {import('next').NextConfig} */
const { join } = require('path')
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  experimental: {
    outputStandalone: true,
    outputFileTracingRoot: join(__dirname, '../../'),
    esmExternals: false,
  }
}

module.exports = nextConfig
