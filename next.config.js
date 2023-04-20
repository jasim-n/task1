/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['static.vecteezy.com', 'example.com', 'cdn.example.com','cdn.pixabay.com'],
  },
}

module.exports = nextConfig
