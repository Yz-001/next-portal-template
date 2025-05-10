// src/layouts/main/NavBar.tsx
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function NavBar() {
  const pathname = usePathname()

  const navItems = [
    { name: '首页', href: '/' },
    { name: '产品', href: '/products' },
    { name: '文档', href: '/docs' },
    { name: '关于', href: '/about' }
  ]

  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-indigo-600">
            企业门户
          </Link>

          {/* 桌面端导航菜单 */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  pathname === item.href
                    ? 'bg-indigo-100 text-indigo-700'
                    : 'text-gray-700 hover:bg-gray-100'
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

          {/* 登录按钮 */}
          <Link
            href="/login"
            className="ml-4 px-4 py-2 rounded-md text-sm font-medium bg-indigo-50 text-indigo-700 hover:bg-indigo-100"
          >
            登录
          </Link>
        </div>
      </div>

      {/* 移动端菜单（展开状态） */}
      {/* 这里可以添加移动端下拉菜单的逻辑 */}
    </header>
  )
}