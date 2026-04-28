import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: { default: 'Naza Abdillah — Full Stack Developer', template: '%s | Naza.dev' },
  description: 'Mahasiswa SI UNSIL. Full-stack developer — Golang, Next.js.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  )
}
