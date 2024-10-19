import { Analytics } from '@vercel/analytics/react'
import './globals.css'
import { manrope, geist } from '@/lib/fonts'

export const metadata = {
  metadataBase: new URL('https://hire.johnwlong.com'),
  title: 'Hire John W. Long',
  description:
    'A multi-discipline product leader with 20+ years experience building web apps & leading software teams. Currently seeking a leadership role where I can collaborate on  product and design.'
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`
        ${manrope.variable}
        ${geist.variable}
        scroll-smooth
      `}
    >
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
