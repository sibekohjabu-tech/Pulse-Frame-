/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pub-629428d185ca4960a0a73c850d32294b.r2.dev",
      },
    ],
  },
};

module.exports = nextConfig;
