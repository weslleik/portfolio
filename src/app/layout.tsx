import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Wesllei Kopceski | Developer & Designer',
  description:
    'Portfolio of a full-stack developer and designer crafting interactive digital experiences.',
  openGraph: {
    title: 'Wesllei Kopceski | Developer & Designer',
    description: 'Crafting interactive digital experiences at the intersection of art and code.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  )
}
