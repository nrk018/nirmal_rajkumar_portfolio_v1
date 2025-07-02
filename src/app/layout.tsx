// src/app/layout.tsx
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { BeamsBackground } from '@/components/ui/beams-background'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nirmal Rajkumar Portfolio',
  description: 'Dark-mode portfolio with Beams background',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-neutral-950 text-white`}>
        <BeamsBackground className="fixed inset-0 -z-10" />
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  )
}