import type { MetadataRoute } from 'next'
import { siteConfig }         from '@config/site'
import { ROUTES }             from '@constants/routes'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = Object.values(ROUTES)
  return routes.map(route => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '/' ? 1 : 0.8,
  }))
}
