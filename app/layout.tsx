import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'tech-slider-editor',
  description: 'Created by T0N1',
  generator: 'v0.dev',
  icons: 'favicon.svg'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
