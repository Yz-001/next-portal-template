import { ReactNode } from 'react'
import { NavBar } from './NavBar'
import { SideBar } from './SideBar'

type AdminLayoutProps = {
  children: ReactNode
  sidebar?: boolean // 可配置参数
}

export function AdminLayout({ children, sidebar = true }: AdminLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* 顶部导航 (固定) */}
      <NavBar />
      
      {/* 主内容区 */}
      <div className="flex flex-1">
        {/* 可选侧边栏 */}
        {sidebar && <SideBar />}
        
        {/* 内容区域 */}
        <main className="flex-1 p-6 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  )
}