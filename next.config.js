/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['raw.githubusercontent.com'],
  },
  env: {
    pokeApiUrl: 'https://pokeapi.co/api/v2/',
  },
}

module.exports = nextConfig
