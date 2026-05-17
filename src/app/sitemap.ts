import { MetadataRoute } from 'next'
import { locales } from '@/i18n/config'

const baseUrl = 'https://jiooweighing.com'

const routes = ['', '/about', '/products', '/contact']

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.flatMap((locale) =>
    routes.map((route) => ({
      url: `${baseUrl}/${locale}${route}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: route === '' ? 1 : 0.8,
      alternates: {
        languages: Object.fromEntries(
          locales.map((l) => [l, `${baseUrl}/${l}${route}`])
        ),
      },
    }))
  )
}