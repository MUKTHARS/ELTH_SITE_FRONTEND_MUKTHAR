import type { Metadata } from 'next'
import { Providers }     from '@providers/index'
import { Navbar }        from '@layouts/index'
import { Footer }        from '@layouts/index'
import { defaultMetadata } from '@config/metadata'
import './globals.css'

export const metadata: Metadata = defaultMetadata

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
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
