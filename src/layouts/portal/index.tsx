import { ReactNode } from 'react'
import { NavBar } from './NavBar'
import { Footer } from './Footer'

type PortalLayoutProps = {
    children: ReactNode
}

export function PortalLayout({ children }: PortalLayoutProps) {
    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            {/* 顶部导航 (固定) */}
            <NavBar />

            {/* 主内容区 */}
            <div className="flex flex-1">
                {/* 内容区域 */}
                <main className="flex-1 overflow-auto">{children}</main>
            </div>

            {/* 页脚 */}
            <Footer />
        </div>
    )
}
