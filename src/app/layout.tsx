import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'TrenzaCorp',
  description: 'TrenzaCorp public landing for logistics and corporate services.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
