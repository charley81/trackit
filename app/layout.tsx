import type { Metadata } from 'next'
import { Inconsolata } from 'next/font/google'
import './globals.css'
import Footer from '@/components/shared/footer'
import TopMenu from '@/components/shared/top-menu'

const inconsolata = Inconsolata({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'trackIT',
  description: 'minimalist task tracker'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${inconsolata.className} flex flex-col min-h-screen bg-background text-foreground px-4 max-w-2xl mx-auto md:max-w-3xl lg:max-w-6xl`}
      >
        <TopMenu />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
