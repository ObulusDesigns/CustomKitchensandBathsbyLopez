/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true, // Re-enabled for better performance
  images: {
    domains: [],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
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
  // Performance optimizations
  experimental: {
    workerThreads: false,
    cpus: 1
  },
  // Enable compression at build time
  compress: true,
  // Production optimizations
  productionBrowserSourceMaps: false,
  // Trailing slash for better SEO
  trailingSlash: true
}

module.exports = nextConfig