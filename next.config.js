/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: '/pricing',
        destination: '/pricing/1',
        permanent: true
      }
    ]
  } 
}

module.exports = nextConfig
