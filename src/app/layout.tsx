import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MedLabs - AI-Powered Management',
  description: 'Streamline your schedule, emails, and documents with the power of artificial intelligence.',
  icons: {
    icon: [
      { url: '/ico/favicon.ico' },
      { url: '/ico/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/ico/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/ico/apple-touch-icon.png' },
    ],
    other: [
      {
        rel: 'android-chrome-192x192',
        url: '/ico/android-chrome-192x192.png',
      },
      {
        rel: 'android-chrome-512x512',
        url: '/ico/android-chrome-512x512.png',
      },
    ],
  },
  manifest: '/ico/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

