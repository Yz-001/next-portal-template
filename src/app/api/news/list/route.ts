import { NextResponse } from 'next/server';

export async function GET(req: Request, res:Response) {
    return NextResponse.json({ code:200, data: [
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
    ]})
}