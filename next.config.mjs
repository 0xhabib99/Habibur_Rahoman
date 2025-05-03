/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'export',  // 👈 Important for static export
  images: {
    unoptimized: true,
  },
  basePath: '/Habibur_Rahoman'
}

export default nextConfig
