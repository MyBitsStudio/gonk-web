import '../styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Base from "@/app/base";
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'GONK on SOL',
  description:
    'Alienate SOL with GONK',
  twitter: {
    title: 'GONK on SOL',
    description:
      'Alienate SOL with GONK',
    images: '/gonk.png',
    card: 'summary_large_image',
    site: '@Gonkthealien',
  },
  openGraph: {
    title: 'GONK on SOL',
    description:
        'Alienate SOL with GONK',
    images: '/gonk.png',
    url: 'https://www.gonkthealien.com',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <Base>
      {children}
    </Base>
  )
}
