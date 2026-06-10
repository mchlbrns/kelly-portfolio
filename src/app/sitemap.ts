import { MetadataRoute } from 'next'
import { projects } from '@/data/projects'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://michaelbriones-dev.vercel.app'
  const lastModified = new Date().toISOString().split('T')[0]
  
  const routes = [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/services`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/resume`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ]

  const serviceRoutes = [
    'ai-automation',
    'custom-web-applications',
    'workflow-automation',
    'mvp-development'
  ].map(service => ({
    url: `${baseUrl}/services/${service}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const projectRoutes = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...routes, ...serviceRoutes, ...projectRoutes]
}
