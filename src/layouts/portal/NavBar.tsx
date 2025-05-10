'use client'

import Link from 'next/link'
// import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { LoginForm } from '@/components/auth/LoginForm'

export function NavBar() {
    const pathname = usePathname()

    const navItems = [
        { name: '首页', href: '/' },
        { name: '服务产品', href: '/products' },
        { name: '新闻中心', href: '/news' },
        { name: '关于我们', href: '/about' }
    ]

    return (
        <header className="bg-white shadow-sm sticky top-0 z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <div className="flex justify-between items-end">
                        {/* <Image src="/images/svg/mark.svg" alt="mark" width={28} height={28} /> */}
                        <Link href="/" className="text-xl font-bold text-indigo-600">
                            Next Portal Template
                        </Link>
                    </div>

                    {/* 桌面端导航菜单 */}
                    <nav className="hidden md:flex space-x-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`px-3 py-2 rounded-md text-sm font-medium ${
                                    pathname === item.href ? 'bg-indigo-100 text-indigo-700' : 'text-gray-700 hover:bg-gray-100'
                                }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    {/* 移动端菜单按钮（可选） */}
                    <button className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100">
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>

                    {/* 登录弹窗 */}
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button variant="outline" className="ml-4 bg-indigo-50 text-indigo-700 hover:bg-indigo-100">
                                登录
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                                <DialogTitle className="text-center">Login</DialogTitle>
                            </DialogHeader>
                            <LoginForm />
                        </DialogContent>
                    </Dialog>
                </div>
            </div>
        </header>
    )
}
