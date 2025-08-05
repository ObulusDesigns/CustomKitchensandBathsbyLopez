import { MetadataRoute } from 'next';
import { monmouthCountyLocations } from '@/lib/locations';
import { SERVICES } from '@/lib/constants';
import { blogPosts } from '@/lib/blog-data';
import { portfolioProjects } from '@/lib/portfolio-data';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://customkitchensbylopez.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date().toISOString();
  
  // Base pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/locations`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/testimonials`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
  ];

  // Service pages (both primary and additional)
  const servicePages: MetadataRoute.Sitemap = [
    ...SERVICES.primary.map((service) => ({
      url: `${baseUrl}/services/${service.id}`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    })),
    ...SERVICES.additional.map((service) => ({
      url: `${baseUrl}/services/${service.id}`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    })),
  ];

  // Location pages
  const locationPages: MetadataRoute.Sitemap = monmouthCountyLocations.map((location) => ({
    url: `${baseUrl}/locations/${location.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Service + Location combination pages (high priority for local SEO)
  const serviceLocationPages: MetadataRoute.Sitemap = [];
  
  const allServices = [...SERVICES.primary, ...SERVICES.additional];
  
  for (const service of allServices) {
    for (const location of monmouthCountyLocations) {
      serviceLocationPages.push({
        url: `${baseUrl}/services/${service.id}/${location.slug}`,
        lastModified: currentDate,
        changeFrequency: 'monthly' as const,
        priority: 0.6,
      });
    }
  }

  // Blog pages
  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  // Portfolio project pages
  const portfolioPages: MetadataRoute.Sitemap = portfolioProjects.map((project) => ({
    url: `${baseUrl}/portfolio/${project.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [
    ...staticPages,
    ...servicePages,
    ...locationPages,
    ...serviceLocationPages,
    ...blogPages,
    ...portfolioPages,
  ];
}