// src/layouts/themes/Providers.tsx
'use client'

import { useEffect, useState } from 'react'
import { ThemeProvider } from 'next-themes'

export function Providers({ children }: { children: React.ReactNode }) {
    const [mounted, setMounted] = useState(false)

    // 确保只在客户端渲染主题逻辑
    useEffect(() => setMounted(true), [])

    if (!mounted) {
        return <div className="contents">{children}</div>
    }

    return (
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            {children}
        </ThemeProvider>
    )
}
