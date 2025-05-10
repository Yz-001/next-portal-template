'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Card } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
type Props = {
    title: string
    subtitle: string
    ctaText: string
    ctaLink: string
    images: string[]
}

export default function HeroBanner({ title, subtitle, ctaText, ctaLink, images }: Props) {
    return (
        <Card className="relative h-[500px] overflow-hidden rounded-none border-0">
            {/* 使用 Carousel 替换手动轮播逻辑 */}
            <Carousel
                plugins={[
                    Autoplay({
                        delay: 2000
                    })
                ]}
                opts={{
                    loop: true // 循环播放
                }}
                className="absolute inset-0"
            >
                <CarouselContent>
                    {images.map((img, index) => (
                        <CarouselItem key={img}>
                            <div className="relative h-[500px]">
                                <Image
                                    src={img}
                                    alt={`Banner Image ${index + 1}`}
                                    fill
                                    className="object-cover"
                                    priority={index === 0}
                                    sizes="100vw"
                                />
                                <div className="absolute inset-0 bg-black/40" /> {/* 半透明遮罩 */}
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>

                {/* 可选：显示左右导航箭头 */}
                <CarouselPrevious className="left-4 hidden sm:inline-flex" />
                <CarouselNext className="right-4 hidden sm:inline-flex" />
            </Carousel>

            {/* 文字内容（固定在轮播上方） */}
            <div className="relative z-20 h-full flex items-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">{title}</h1>
                    <p className="text-xl md:text-2xl mb-8 max-w-2xl">{subtitle}</p>
                    <Link
                        href={ctaLink}
                        className="inline-block px-8 py-3 bg-white text-blue-700 font-medium rounded-lg hover:bg-gray-100 transition-colors"
                    >
                        {ctaText}
                    </Link>
                </div>
            </div>
        </Card>
    )
}
