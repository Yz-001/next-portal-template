'use client' // 在文件顶部添加客户端组件声明
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import HeroBanner from '@/components/home/HeroBanner'
import NewsCard from '@/components/home/NewsCard'
import { getNewsListApi } from '@/services/news.service'

// 将类型定义移到组件外部，避免重复声明
type NewsItem = {
    id: string
    title: string
    publishedAt: string
    excerpt: string
    coverImage: string
    category: string
    slug: string
}

export default function Home() {
    const [featuredNews, setFeaturedNews] = useState<NewsItem[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    // 使用useEffect处理客户端数据获取
    useEffect(() => {
        const getNewsList = async () => {
            try {
                setIsLoading(true)
                const response = await getNewsListApi()
                setFeaturedNews(response?.data || [])
            } catch (err) {
                console.error('getNewsList failed:', err)
                setError('无法加载新闻数据，请稍后重试')
            } finally {
                setIsLoading(false)
            }
        }
        getNewsList()
    }, [])

    return (
        <div className="bg-gray-50">
            {/* 1. 英雄区域 - 轮播图/主视觉 */}
            <HeroBanner
                title="企业数字化解决方案专家"
                subtitle="提供一站式数字化转型服务"
                ctaText="了解详情"
                ctaLink="/solutions"
                images={['/images/banners/1.jpg', '/images/banners/2.jpg']}
            />

            {/* 3. 精选新闻/公告 */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* ...标题区域保持不变... */}

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {isLoading ? (
                            // 加载状态
                            Array(3).fill(0).map((_, i) => (
                                <div key={i} className="animate-pulse bg-gray-200 h-64 rounded-lg" />
                            ))
                        ) : error ? (
                            // 错误提示
                            <div className="col-span-full text-center text-red-600">
                                {error}
                                <button
                                    onClick={() => window.location.reload()}
                                    className="ml-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                                >
                                    重试
                                </button>
                            </div>
                        ) : (
                            // 正常数据展示
                            featuredNews.map((news) => (
                                <NewsCard
                                    key={news.id}
                                    title={news.title}
                                    date={news.publishedAt}
                                    excerpt={news.excerpt}
                                    image={news.coverImage}
                                    category={news.category}
                                    slug={news.slug}
                                />
                            ))
                        )}
                    </div>
                </div>
            </section>

            {/* 4. 客户案例展示 */}
            <section className="py-16 bg-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">成功案例</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                        {[
                            '/images/news/white-paper.jpg',
                            '/images/news/white-paper.jpg',
                            '/images/news/white-paper.jpg'
                            // ...更多客户logo
                        ].map((logo, index) => (
                            <div
                                key={index}
                                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow flex items-center justify-center"
                            >
                                <Image src={logo} alt={`客户${index + 1}`} width={120} height={80} className="object-contain h-12" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. 行动号召区域 */}
            <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
                <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">准备好开始数字化转型了吗？</h2>
                    <p className="text-xl mb-8 opacity-90">我们的专家团队将为您提供定制化解决方案</p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link
                            href="/contact"
                            className="px-8 py-3 bg-white text-blue-700 font-medium rounded-lg hover:bg-gray-100 transition-colors"
                        >
                            联系我们
                        </Link>
                        <Link
                            href="/demo"
                            className="px-8 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:bg-opacity-10 transition-colors"
                        >
                            预约演示
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}