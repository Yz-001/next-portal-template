// src/layouts/main/SideBar.tsx
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function SideBar() {
  const pathname = usePathname()

  const menuItems = [
    { name: '仪表盘', href: '/dashboard', icon: '📊' },
    { name: '分析报告', href: '/analytics', icon: '📈' },
    { name: '用户管理', href: '/users', icon: '👥' },
    { name: '系统设置', href: '/settings', icon: '⚙️' }
  ]

  return (
    <aside className="w-64 border-r bg-white hidden md:block">
      <div className="p-4 space-y-1">
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center px-3 py-2 text-sm rounded-md ${
              pathname === item.href
                ? 'bg-indigo-50 text-indigo-700'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            <span className="mr-3">{item.icon}</span>
            {item.name}
          </Link>
        ))}
      </div>

      {/* 底部附加内容（可选） */}
      <div className="absolute bottom-0 left-0 right-0 p-4 border-t">
        <Link 
          href="/help"
          className="flex items-center text-sm text-gray-600 hover:text-gray-900"
        >
          <span className="mr-2">❓</span> 帮助中心
        </Link>
      </div>
    </aside>
  )
}