import { request } from '@/lib/request'

interface NewInfo {
    title: string
    date: string
    excerpt: string
    image: string
    category: string
    slug: string
}
export const getNewsListApi = () => request.get<NewInfo>('/api/news/list')