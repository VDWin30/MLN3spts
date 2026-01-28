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
  variable: "--font-geist-mono",import React from "react"
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
    <html lang="vi" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}>
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="robots" content="index, follow" />
      </head>
      <body className={`
        font-sans antialiased min-h-screen
        bg-gradient-to-br from-background via-background to-primary/5
        dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-900 dark:to-primary/10
        relative overflow-x-hidden
      `}>
        {/* Animated Background Elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl opacity-10 animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-full blur-3xl opacity-10 animate-float" style={{ animationDelay: '2s' }} />
          
          {/* Floating Particles */}
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary rounded-full animate-pulse"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                opacity: Math.random() * 0.3 + 0.1,
              }}
            />
          ))}
        </div>

        {/* Main Content */}
        <div className="relative z-10">
        

          {children}

          {/* Enhanced Footer */}
          <footer className="mt-20 border-t glass-effect">
            <div className="container mx-auto px-4 py-12">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 vietnam-star" />
                    <span className="text-lg font-bold text-gradient-vietnam">VN History</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Tôn vinh và bảo tồn di sản lịch sử Chủ nghĩa Xã hội Việt Nam qua từng giai đoạn phát triển.
                  </p>
                  <div className="flex space-x-4">
                    {[...Array(4)].map((_, i) => (
                      <div
                        key={i}
                        className="w-10 h-10 rounded-full bg-gradient-to-br from-card to-background flex items-center justify-center hover:scale-110 transition-all duration-300 cursor-pointer border border-border/50"
                      >
                        <div className="w-4 h-4 bg-gradient-to-r from-primary to-accent rounded-sm" />
                      </div>
                    ))}
                  </div>
                </div>

                {[
                  {
                    title: 'Mốc Lịch Sử',
                    links: ['1945 - Độc Lập', '1954 - Chiến Thắng', '1975 - Thống Nhất', '1986 - Đổi Mới']
                  },
                  {
                    title: 'Tài Nguyên',
                    links: ['Tài liệu gốc', 'Ảnh lưu trữ', 'Video tư liệu', 'Bài nghiên cứu']
                  },
                  {
                    title: 'Liên Hệ',
                    links: ['Đóng góp ý kiến', 'Hợp tác nghiên cứu', 'Thông tin giáo dục', 'Chính sách bảo mật']
                  }
                ].map((section, idx) => (
                  <div key={idx} className="space-y-4">
                    <h4 className="font-semibold text-lg text-foreground relative inline-block">
                      {section.title}
                      <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-accent" />
                    </h4>
                    <ul className="space-y-3">
                      {section.links.map((link) => (
                        <li key={link}>
                          <a
                            href="#"
                            className="text-sm text-muted-foreground hover:text-foreground hover:pl-2 transition-all duration-300 flex items-center group"
                          >
                            <div className="w-1 h-1 bg-primary rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                            {link}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="mt-12 pt-8 border-t border-border/50">
                <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                  <p className="text-sm text-muted-foreground text-center md:text-left">
                    © {new Date().getFullYear()} Lịch Sử Việt Nam. Mọi quyền được bảo lưu.
                  </p>
                  <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                    <a href="#" className="hover:text-foreground transition-colors">
                      Điều khoản sử dụng
                    </a>
                    <a href="#" className="hover:text-foreground transition-colors">
                      Chính sách bảo mật
                    </a>
                    <a href="#" className="hover:text-foreground transition-colors">
                      Liên hệ
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>

        {/* Back to Top Button */}
        <button
          className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-primary-foreground shadow-lg hover:scale-110 transition-all duration-300 z-40 hover:shadow-xl hover:shadow-primary/40"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
        >
          ↑
        </button>

        <Analytics />
      </body>
    </html>
  )
}
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
    <html lang="vi" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}>
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="robots" content="index, follow" />
      </head>
      <body className={`
        font-sans antialiased min-h-screen
        bg-gradient-background bg-fixed
        noise-texture
        relative overflow-x-hidden
      `}>
        {/* Animated Background Elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-primary rounded-full blur-3xl opacity-10 animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-secondary rounded-full blur-3xl opacity-10 animate-float" style={{ animationDelay: '2s' }} />
          
          {/* Animated Grid Pattern */}
          <div className="absolute inset-0 pattern-grid opacity-5 animate-wave" />
          
          {/* Floating Particles */}
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary rounded-full animate-pulse"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                opacity: Math.random() * 0.3 + 0.1,
              }}
            />
          ))}
        </div>

        {/* Main Content */}
        <div className="relative z-10">
          {/* Glass Header */}
          <header className="sticky top-0 z-50 glass border-b backdrop-blur-xl supports-[backdrop-filter]:bg-white/80 supports-[backdrop-filter]:dark:bg-gray-900/80">
            <div className="container mx-auto px-4 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3 group cursor-pointer">
                  <div className="w-10 h-10 vietnam-star flex items-center justify-center relative">
                    <div className="vietnam-star animate-pulse-glow" />
                    <div className="absolute inset-0 vietnam-star opacity-30 blur-md" />
                  </div>
                  <div>
                    <h1 className="text-xl font-bold text-gradient-primary group-hover:scale-105 transition-transform">
                      Lịch Sử Việt Nam
                    </h1>
                    <p className="text-xs text-muted-foreground font-mono">
                      Timeline 1945-2011
                    </p>
                  </div>
                </div>
                
                <nav className="hidden md:flex items-center space-x-1">
                  {['Timeline', 'Tài Liệu', 'Hình Ảnh', 'Về Chúng Tôi'].map((item, i) => (
                    <a
                      key={item}
                      href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                      className="relative px-4 py-2 rounded-lg text-sm font-medium text-foreground/80 hover:text-foreground transition-colors group"
                    >
                      <span className="relative z-10">{item}</span>
                      <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 rounded-lg transition-opacity duration-300" />
                      <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-primary group-hover:w-3/4 group-hover:left-1/4 transition-all duration-300" />
                    </a>
                  ))}
                  <button className="ml-4 px-6 py-2 bg-gradient-primary text-primary-foreground rounded-lg font-medium hover:shadow-primary hover:scale-105 transition-all duration-300 glow-on-hover">
                    Khám Phá
                  </button>
                </nav>
              </div>
            </div>
          </header>

          {children}

          {/* Enhanced Footer */}
          <footer className="mt-20 border-t glass-card backdrop-blur-lg">
            <div className="container mx-auto px-4 py-12">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 vietnam-star" />
                    <span className="text-lg font-bold text-gradient-primary">VN History</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Tôn vinh và bảo tồn di sản lịch sử Chủ nghĩa Xã hội Việt Nam qua từng giai đoạn phát triển.
                  </p>
                  <div className="flex space-x-4">
                    {[...Array(4)].map((_, i) => (
                      <div
                        key={i}
                        className="w-10 h-10 rounded-full bg-gradient-card flex items-center justify-center hover:scale-110 hover:shadow-card transition-all duration-300 cursor-pointer border border-border/50"
                      >
                        <div className="w-4 h-4 bg-gradient-primary rounded-sm" />
                      </div>
                    ))}
                  </div>
                </div>

                {[
                  {
                    title: 'Mốc Lịch Sử',
                    links: ['1945 - Độc Lập', '1954 - Chiến Thắng', '1975 - Thống Nhất', '1986 - Đổi Mới']
                  },
                  {
                    title: 'Tài Nguyên',
                    links: ['Tài liệu gốc', 'Ảnh lưu trữ', 'Video tư liệu', 'Bài nghiên cứu']
                  },
                  {
                    title: 'Liên Hệ',
                    links: ['Đóng góp ý kiến', 'Hợp tác nghiên cứu', 'Thông tin giáo dục', 'Chính sách bảo mật']
                  }
                ].map((section, idx) => (
                  <div key={idx} className="space-y-4">
                    <h4 className="font-semibold text-lg text-foreground relative inline-block">
                      {section.title}
                      <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-primary" />
                    </h4>
                    <ul className="space-y-3">
                      {section.links.map((link) => (
                        <li key={link}>
                          <a
                            href="#"
                            className="text-sm text-muted-foreground hover:text-foreground hover:pl-2 transition-all duration-300 flex items-center group"
                          >
                            <div className="w-1 h-1 bg-primary rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                            {link}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="mt-12 pt-8 border-t border-border/50">
                <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                  <p className="text-sm text-muted-foreground text-center md:text-left">
                    © {new Date().getFullYear()} Lịch Sử Việt Nam. Mọi quyền được bảo lưu.
                  </p>
                  <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                    <a href="#" className="hover:text-foreground transition-colors shimmer relative">
                      Điều khoản sử dụng
                    </a>
                    <a href="#" className="hover:text-foreground transition-colors">
                      Chính sách bảo mật
                    </a>
                    <a href="#" className="hover:text-foreground transition-colors">
                      Liên hệ
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>

        {/* Back to Top Button */}
        <button
          className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground shadow-lg hover:shadow-primary hover:scale-110 transition-all duration-300 z-40 glow-primary"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          ↑
        </button>

        <Analytics />
      </body>
    </html>
  )
}
