import './globals.css'
import { Inter } from 'next/font/google'
import { Providers } from '../components/wrappers/Providers'
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'CC MotorSports',
  description: 'Everything motorsports by Christ Costa',
}
import MainHeadingBanner from '@/components/MainHeading'

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Providers>{children}</Providers>
        <Analytics />
      </body>
    </html>
  )
}
