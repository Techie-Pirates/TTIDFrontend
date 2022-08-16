/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  env: {
    DEFAULT_THEME: process.env.DEFAULT_THEME
  }
}

module.exports = nextConfig
