/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  webpack: (config, { isServer }) => {
    // Fix for chunk load errors
    config.optimization.splitChunks = {
      chunks: "all",
      cacheGroups: {
        default: false,
        vendors: false,
        // Vendor chunk
        vendor: {
          name: "vendor",
          chunks: "all",
          test: /node_modules/,
          priority: 20,
        },
        // Common chunk
        common: {
          name: "common",
          minChunks: 2,
          chunks: "all",
          priority: 10,
          reuseExistingChunk: true,
          enforce: true,
        },
      },
    };
    return config;
  },
  // Add proper domains for images if you're using next/image
  images: {
    domains: [
      "firebasestorage.googleapis.com",
      "banghieuminhkhang.com",
      "ledsun.vn",
      "fastly.picsum.photos",
    ],
  },
};

module.exports = nextConfig;
