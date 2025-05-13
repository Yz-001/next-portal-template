import type { NextConfig } from 'next'
// import path from 'path'

const nextConfig: NextConfig = {
    // sassOptions: {
    //     includePaths: [path.join(__dirname, 'styles')],
    //     // 全局注入变量（支持 Element Plus 和自定义变量）
    //     prependData: `
    //     @use "styles/variables" as *;
    //     `
    // },
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
