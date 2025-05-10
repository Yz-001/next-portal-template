import Link from 'next/link'
import Image from 'next/image'

type Props = {
  title: string
  date: string
  excerpt: string
  image: string
  category: string
  slug: string
}

export default function NewsCard({ title, excerpt, image, category, slug }: Props) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <Link href={`/news/${slug}`}>
        <div className="relative h-48">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <span className="absolute top-4 left-4 bg-blue-600 text-white text-xs px-2 py-1 rounded">
            {category}
          </span>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mt-2 mb-3 line-clamp-2">{title}</h3>
          <p className="text-gray-600 line-clamp-3">{excerpt}</p>
        </div>
      </Link>
    </div>
  )
}