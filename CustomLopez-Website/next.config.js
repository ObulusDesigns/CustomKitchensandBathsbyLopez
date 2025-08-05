/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false, // Disabled to prevent webpack issues
  images: {
    domains: [],
    formats: ['image/avif', 'image/webp'],
  },
  webpack: (config, { isServer }) => {
    // Fix for hydration issues
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      };
    }
    
    // Clear cache on each build
    config.cache = false;
    
    return config;
  },
  // Disable webpack cache to prevent stale module issues
  experimental: {
    workerThreads: false,
    cpus: 1
  }
}

module.exports = nextConfig