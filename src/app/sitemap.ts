import { MetadataRoute } from 'next'

export const dynamic = "force-static";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://pozosazulescolombia.com'
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
          en: `${baseUrl}/en`,
          es: `${baseUrl}/es`,
          zh: `${baseUrl}/zh`,
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
            en: `${baseUrl}/en/${page}`,
            es: `${baseUrl}/es/${page}`,
            zh: `${baseUrl}/zh/${page}`,
          },
        },
      })
    })
  })

  return sitemapEntries
}