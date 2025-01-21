/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone', // Updated from experimental.outputStandalone
  eslint: {
    ignoreDuringBuilds: true, // Ignores ESLint errors during builds
  },
};

module.exports = nextConfig;