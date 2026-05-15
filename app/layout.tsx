import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'Barber Shop - André Luis | Experiência Premium em Barbearia',
  description: 'Experiência premium em cortes masculinos, barba e estilo sofisticado. Renove seu visual com profissionais especializados e atendimento exclusivo.',
  keywords: ['barbearia', 'corte masculino', 'barba', 'barbearia premium', 'André Luis'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth bg-[#0f0f12]">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-[#0f0f12]`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
