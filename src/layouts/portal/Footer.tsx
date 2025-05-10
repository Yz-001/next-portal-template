// src/layouts/main/Footer.tsx
import Link from 'next/link'

export function Footer() {
  const footerLinks = [
    {
      title: '产品',
      items: [
        { name: '功能特性', href: '/features' },
        { name: '价格方案', href: '/pricing' },
        { name: 'API文档', href: '/api-docs' }
      ]
    },
    // ...其他链接数据
  ]

  return (
    <footer className="bg-gray-900 text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* 链接网格 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* 公司信息 */}
          <div className="col-span-2">
            <h3 className="text-xl font-bold mb-4">Next Portal Template</h3>
            <p className="text-gray-400 max-w-md">
              为企业提供全方位的数字化门户解决方案
            </p>
          </div>

          {/* 链接栏目 */}
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h4 className="text-lg font-semibold mb-4">{column.title}</h4>
              <ul className="space-y-2">
                {column.items.map((item) => (
                  <li key={item.name}>
                    <Link 
                      href={item.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* 版权信息 */}
        <div className="pt-2 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} 企业门户系统
          </p>
          <div className="flex gap-4 mt-4 sm:mt-0">
            <Link href="/sitemap" className="text-gray-400 hover:text-white text-sm">
              网站地图
            </Link>
            <Link href="/contact" className="text-gray-400 hover:text-white text-sm">
              联系我们
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}