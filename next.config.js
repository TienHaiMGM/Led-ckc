/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  webpack: (config, { isServer }) => {
    // Fix for chunk load errors
    config.optimization.splitChunks = {
      chunks: "all",
      cacheGroups: {
        react: {
          test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
          name: "react",
          chunks: "all",
          priority: 30,
          enforce: true,
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
    config.optimization.runtimeChunk = "single"; // Ngăn lỗi CSS bị load như script
    return config;
  },
  // Add proper domains for images if you're using next/image
  images: {
    domains: [
      "firebasestorage.googleapis.com",
      "fastly.picsum.photos",
      "localhost",
      "res.cloudinary.com",
      "img.icons8.com",
    ],
    formats: ["image/webp", "image/avif"],
  },
};

module.exports = nextConfig;
