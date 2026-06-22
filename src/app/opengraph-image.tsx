import { ImageResponse } from 'next/og'
import { siteConfig } from '@config/site'

export const runtime = 'edge'
export const alt = siteConfig.name
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0A1628',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '80px',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            fontSize: 20,
            color: '#085041',
            background: 'rgba(8,80,65,0.15)',
            padding: '8px 20px',
            borderRadius: 100,
            marginBottom: 32,
            letterSpacing: 2,
            textTransform: 'uppercase',
          }}
        >
          Built on Saple.ai
        </div>
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: '#ffffff',
            lineHeight: 1.1,
            marginBottom: 24,
          }}
        >
          {siteConfig.name}
        </div>
        <div
          style={{
            fontSize: 28,
            color: 'rgba(255,255,255,0.6)',
            maxWidth: 700,
            lineHeight: 1.5,
          }}
        >
          {siteConfig.tagline}
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: 80,
            left: 80,
            fontSize: 18,
            color: 'rgba(255,255,255,0.3)',
          }}
        >
          {siteConfig.url}
        </div>
      </div>
    ),
    { ...size }
  )
}
