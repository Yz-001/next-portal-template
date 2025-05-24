/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: [] // 允许加载的图片域名
    },
    experimental: {
        serverActions: true
    },
    async rewrites() {
        return process.env.NODE_ENV === 'development'
            ? [
                  {
                      source: '/api/:path*',
                      destination: process.env.NEXT_PUBLIC_APP_BASE_API + '/:path*'
                  }
              ]
            : []
    }
}

export default nextConfig
