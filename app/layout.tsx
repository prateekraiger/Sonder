import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'

import { SmoothScroll } from '@/components/smooth-scroll'
import { Header } from '@/components/sections/header'
import { Footer } from '@/components/sections/footer'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://scribblit.app'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Sonder — Clean Notes & Idea Management',
    template: '%s | Sonder',
  },
  description:
    'A premium note-taking experience for deep thinkers. Capture thoughts instantly, organize with AI, and sync across all your devices.',
  keywords: [
    'note-taking app',
    'smart notebook',
    'idea tracking',
    'daily planner',
    'notes organizer',
    'AI notes',
    'cloud notes',
    'writing app',
    'productivity tool',
    'Sonder',
  ],
  authors: [{ name: 'Sonder', url: siteUrl }],
  creator: 'Sonder',
  publisher: 'Sonder',
  applicationName: 'Sonder',
  category: 'Productivity',
  classification: 'Note-Taking & Productivity',
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Sonder',
    title: 'Sonder — Ideas. Notes. Clarity. Wherever Your Mind Goes.',
    description:
      'Combine note-taking, idea tracking, and daily planning in one smart notebook. Capture thoughts instantly, organize with AI, and sync across all your devices.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Sonder — Smart notebook for ideas, notes, and daily planning',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sonder — Ideas. Notes. Clarity. Wherever Your Mind Goes.',
    description:
      'Combine note-taking, idea tracking, and daily planning in one smart notebook. Capture thoughts instantly, organize with AI, and sync across all your devices.',
    images: ['/og-image.png'],
    creator: '@sonder',
    site: '@sonder',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#09090b' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  colorScheme: 'light dark',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}
      >
        <SmoothScroll>
          <Header />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  )
}
