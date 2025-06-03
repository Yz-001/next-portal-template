/** @type {import('next').NextConfig} */
import {NextConfig} from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
    reactStrictMode: true,
    images: {
        domains: [] // 允许加载的图片域名
    },
    // experimental: {
    //     serverActions: true
    // },
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

const withNextIntl = createNextIntlPlugin(
    // Specify a custom path here
  './src/lib/i18n/request.ts'
);

export default withNextIntl(nextConfig)
