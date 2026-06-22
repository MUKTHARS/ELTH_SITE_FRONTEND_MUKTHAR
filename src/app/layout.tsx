import type { Metadata } from 'next'
import { Inter }         from 'next/font/google'
import { Providers }     from '@providers/index'
import { Navbar }        from '@layouts/index'
import { Footer }        from '@layouts/index'
import { defaultMetadata } from '@config/metadata'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = defaultMetadata

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Providers>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
