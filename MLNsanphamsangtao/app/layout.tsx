import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: 'Chủ Nghĩa Xã Hội Việt Nam | Timeline 1945-2011',
  description: 'Website giáo dục về lịch sử Chủ nghĩa xã hội và thời kỳ quá độ lên chủ nghĩa xã hội ở Việt Nam. Timeline tương tác từ 1945 đến 2011 với hình ảnh, video và tài liệu.',
  keywords: 'chủ nghĩa xã hội, lịch sử Việt Nam, timeline, 1945, 1954, 1975, 1986, 1991, 2011, cách mạng, điện biên phủ',
  authors: [{ name: 'Giáo dục Lịch sử Việt Nam' }],
  generator: 'v0.app',
  openGraph: {
    type: 'website',
    title: 'Chủ Nghĩa Xã Hội Việt Nam | Timeline 1945-2011',
    description: 'Website giáo dục về lịch sử Chủ nghĩa xã hội Việt Nam',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'Lịch sử Việt Nam',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chủ Nghĩa Xã Hội Việt Nam | Timeline 1945-2011',
    description: 'Website giáo dục về lịch sử Chủ nghĩa xã hội Việt Nam',
    images: ['https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1200&q=80'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)', sizes: '32x32' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)', sizes: '32x32' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180' }
    ],
  },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#dc2626' },
    { media: '(prefers-color-scheme: dark)', color: '#991b1b' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        {/* Preconnect to image sources for better performance */}
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        
        {/* Additional meta tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="robots" content="index, follow" />
      </head>
      <body className={`
        font-sans antialiased 
        bg-gradient-to-br from-red-50 via-white to-amber-50 
        dark:from-gray-900 dark:via-gray-800 dark:to-red-900/20
        min-h-screen relative
        overflow-x-hidden
      `}>
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=2000&q=5&blend=multiply')] 
          bg-fixed bg-cover bg-center mix-blend-overlay opacity-5 dark:opacity-10 pointer-events-none" />
        
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-red-500/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tr from-amber-500/10 to-transparent rounded-full blur-3xl" />
        
        {/* Main Content */}
        <div className="relative z-10">
       
          {children}

          {/* Footer */}
          <footer className="mt-20 border-t border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-gray-900/50 backdrop-blur-lg">
            <div className="container mx-auto px-4 py-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                    Chủ Nghĩa Xã Hội Việt Nam
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Website giáo dục về lịch sử Chủ nghĩa xã hội và thời kỳ quá độ lên chủ nghĩa xã hội ở Việt Nam.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-4 text-gray-900 dark:text-white">Liên kết nhanh</h4>
                  <ul className="space-y-2">
                    <li><a href="/timeline" className="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors">Timeline 1945-2011</a></li>
                    <li><a href="/documents" className="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors">Tài liệu lịch sử</a></li>
                    <li><a href="/gallery" className="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors">Thư viện ảnh</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-4 text-gray-900 dark:text-white">Thông tin</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    © {new Date().getFullYear()} - Website được xây dựng vì mục đích giáo dục và nghiên cứu lịch sử.
                  </p>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-gray-500 dark:text-gray-500 text-sm">
                <p>Lưu ý: Đây là website giáo dục, thông tin mang tính chất tham khảo và học thuật.</p>
              </div>
            </div>
          </footer>
        </div>

        <Analytics />
      </body>
    </html>
  )
}
