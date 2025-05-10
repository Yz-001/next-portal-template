// app/page.tsx
import Link from 'next/link'
import Image from 'next/image'
import HeroBanner from '@/components/home/HeroBanner'
import NewsCard from '@/components/home/NewsCard'

export default async function Home() {
    // 在 app/page.tsx 顶部添加类型定义
    type NewsItem = {
        id: string
        title: string
        publishedAt: string
        excerpt: string
        coverImage: string
        category: string
        slug: string
    }

    // 在组件内部替换空数组为模拟数据
    const featuredNews: NewsItem[] = [
        {
            id: '1',
            title: '企业数字化转型白皮书正式发布',
            publishedAt: '2023-06-15T10:00:00Z',
            excerpt: '本白皮书详细分析了当前企业数字化转型的五大趋势和三大实施路径，助力企业制定科学的转型策略。',
            coverImage: '/images/news/white-paper.jpg',
            category: '行业报告',
            slug: 'digital-transformation-white-paper'
        },
        {
            id: '2',
            title: '我司荣获2023年度最佳云服务提供商',
            publishedAt: '2023-05-28T14:30:00Z',
            excerpt: '在刚刚结束的全球云计算峰会上，我司凭借创新的混合云解决方案获得行业最高荣誉。',
            coverImage: '/images/news/white-paper.jpg',
            category: '公司动态',
            slug: 'best-cloud-provider-award'
        },
        {
            id: '3',
            title: '新一代AI客服系统正式上线',
            publishedAt: '2023-06-01T09:15:00Z',
            excerpt: '基于自然语言处理技术的新一代智能客服系统，可实现85%以上的常见问题自动解答。',
            coverImage: '/images/news/white-paper.jpg',
            category: '产品更新',
            slug: 'new-ai-customer-service'
        },
        {
            id: '4',
            title: '与某大型制造集团达成战略合作',
            publishedAt: '2023-05-20T16:45:00Z',
            excerpt: '双方将在工业物联网领域展开深度合作，共同打造智能工厂示范项目。',
            coverImage: '/images/news/white-paper.jpg',
            category: '合作伙伴',
            slug: 'manufacturing-cooperation'
        },
        {
            id: '5',
            title: '2023开发者大会圆满落幕',
            publishedAt: '2023-06-10T18:00:00Z',
            excerpt: '为期三天的开发者大会吸引了超过2000名技术从业者参与，发布多项技术创新成果。',
            coverImage: '/images/news/white-paper.jpg',
            category: '活动',
            slug: 'dev-conference-2023'
        },
        {
            id: '6',
            title: '数据安全合规指南更新通知',
            publishedAt: '2023-06-05T11:20:00Z',
            excerpt: '根据最新法律法规要求，我们更新了数据安全管理规范，请各合作伙伴及时查阅。',
            coverImage: '/images/news/white-paper.jpg',
            category: '政策通知',
            slug: 'data-security-update'
        }
    ]

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
                    <div className="flex justify-between items-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900">新闻动态</h2>
                        <Link href="/news" className="text-blue-600 hover:text-blue-800 transition-colors">
                            查看更多 →
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {featuredNews.map((news) => (
                            <NewsCard
                                key={news.id}
                                title={news.title}
                                date={news.publishedAt}
                                excerpt={news.excerpt}
                                image={news.coverImage}
                                category={news.category}
                                slug={news.slug}
                            />
                        ))}
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
