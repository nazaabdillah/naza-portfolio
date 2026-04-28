import type { NextConfig } from 'next'
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ hostname: 'api.dicebear.com' }]
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  
}
export default nextConfig
