/** @type {import('next').NextConfig} */
const isLocal = process.env.LOCAL_DEV === 'true';

const nextConfig = {
  output: 'export',
  basePath: isLocal ? '' : '/me',
  assetPrefix: isLocal ? '' : '/me',
  images: {
    unoptimized: true,
  },
  env: {
    LOCAL_DEV: process.env.LOCAL_DEV || '',
  },
}

module.exports = nextConfig