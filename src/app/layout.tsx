import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'JIOO Weighing System',
  description: 'Industrial & commercial weighing systems built for accuracy.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  )
}
