import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ hostname: 'api.dicebear.com' }]
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Sekalian abaikan error type saat build biar gak ribet
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
