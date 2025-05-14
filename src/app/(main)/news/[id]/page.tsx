'use client'
 
import { useParams, useRouter } from 'next/navigation'
import { usePathname, useSearchParams } from 'next/navigation'

export default function News() {
  const router = useRouter() // push back
  const pathname = usePathname() //path news/digital-transformation-white-paper
  const { id } = useParams() //params
  const query = useSearchParams() //query set
  const queryObj = Object.fromEntries(query.entries()); // query object
  console.log('router', router, pathname, query, query.get('a'), queryObj)
  return (
    <div className="flex flex-col gap-4">
      <p className="text-gray-600">这里是新闻列表{id}内容的详情。</p>
    </div>
  )
}