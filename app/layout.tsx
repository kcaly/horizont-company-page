import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Oswald } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-inter',
})

const oswald = Oswald({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-oswald',
})

export const metadata: Metadata = {
  title: 'Horyzont – Profesjonalna obsługa terenów i obiektów',
  description:
    'Kompleksowe usługi utrzymania czystości i pielęgnacji terenów zewnętrznych oraz obiektów. Pielęgnacja zieleni, mycie okien, prace porządkowe, odśnieżanie – dla firm i klientów indywidualnych.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  themeColor: '#242b3a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pl" className={`bg-background ${inter.variable} ${oswald.variable}`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
