import { relative } from 'path'
import './globals.css'

import { Footer, Navbar } from '@/Components'
export const metadata = {
  title: 'FinançApp',
  description: 'FinançApp - Controle suas finanças com facilidade e confiança',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <Navbar />
      <body>
        {children}
      </body>
      <Footer />
    </html>
  )
}