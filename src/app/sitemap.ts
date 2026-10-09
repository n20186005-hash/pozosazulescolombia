import { MetadataRoute } from 'next'

export const dynamic = "force-static";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.pozosazulescolombia.com'
const locales = ['en', 'es', 'zh']

export default function sitemap(): MetadataRoute.Sitemap {
  const sitemapEntries: MetadataRoute.Sitemap = []

  // Add the root route for each language
  locales.forEach((locale) => {
    sitemapEntries.push({
      url: `${baseUrl}/${locale}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
      alternates: {
        languages: {
          'es-CO': `${baseUrl}/es`,
          en: `${baseUrl}/en`,
          'zh-CN': `${baseUrl}/zh`,
        },
      },
    })
    
    // Add inner pages
    const pages = ['privacy', 'terms', 'cookies']
    pages.forEach((page) => {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}/${page}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.5,
        alternates: {
          languages: {
            'es-CO': `${baseUrl}/es/${page}`,
            en: `${baseUrl}/en/${page}`,
            'zh-CN': `${baseUrl}/zh/${page}`,
          },
        },
      })
    })
  })

  return sitemapEntries
}