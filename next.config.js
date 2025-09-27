/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/gh-profile' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/gh-profile/' : '',
}

module.exports = nextConfig