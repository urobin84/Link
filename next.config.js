/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'
const nextConfig = {
  basePath: isProd ? '/Link' : '',
  output: 'export',
  distDir: 'dist',
  images:{
    unoptimized: true
  },
  reactStrictMode: false,
}

module.exports = nextConfig
