import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Zubair AI Mini School - Creative Digital Learning for Kids',
  description: 'Join our online AI-powered school where children learn graphics design, video editing, and coding through fun, interactive lessons designed just for young creators.',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  )
}
