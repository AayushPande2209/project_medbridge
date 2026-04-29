import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Project MedBridge — Medical Supply Redistribution, Central Ohio',
  description:
    'Project MedBridge is a student-led nonprofit that redistributes surplus medical supplies from healthcare providers to under-resourced communities across Central Ohio.',
  keywords: ['medical supplies', 'nonprofit', 'Central Ohio', 'healthcare', 'HOSA', 'surplus redistribution'],
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background scroll-smooth">
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
