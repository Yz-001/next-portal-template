import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    /* config options here */
    webpack: (config, { dev }) => {
        if (dev) {
            config.watchOptions = {
                poll: 1000, // 检查文件变化的频率（毫秒）
                aggregateTimeout: 300 // 重新构建前的延迟
            }
        }
        return config
    }
}

export default nextConfig
