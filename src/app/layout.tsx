import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import TrustBar from '@/components/TrustBar'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'The Fifty | Who Holds the Levers of UK Growth',
  description: 'Ranking the leaders shaping UK capital, policy, and culture. The Fifty identifies who holds the levers of power and influence.',
  metadataBase: new URL('https://fifty.otamediagroup.com'),
  openGraph: {
    title: 'The Fifty | Who Holds the Levers of UK Growth',
    description: 'Ranking the leaders shaping UK capital, policy, and culture.',
    url: 'https://fifty.otamediagroup.com',
    siteName: 'The Fifty',
    images: [
      {
        url: '/api/og',
        width: 1200,
        height: 630,
        alt: 'The Fifty',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Fifty | Who Holds the Levers of UK Growth',
    description: 'Ranking the leaders shaping UK capital, policy, and culture.',
    images: ['/api/og'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-dark text-gray-200`}>
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <TrustBar />
        <Footer />
      </body>
    </html>
  )
}
