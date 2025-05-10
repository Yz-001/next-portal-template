import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { PortalLayout } from '@/layouts/portal';
import "@/styles/globals.css";

// 导入Geist Sans 字体的实例化对象 现代无衬线字体
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// 导入Geist Mono 字体的实例化对象 一种等宽字体（适合代码、终端显示），与 Geist Sans 风格一致
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 设置meta标题
export const metadata: Metadata = {
  title: "Next Portal Template",
  description: "Next Portal Template",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/images/svg/mark.svg" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <PortalLayout>
          {children}
        </PortalLayout>
      </body>
    </html>
  );
}
