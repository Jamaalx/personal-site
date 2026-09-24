import { MetadataRoute } from 'next';

import projects from '@/data/projects';
import { SITE_URL } from '@/lib/utils';

export const dynamic = 'force-static';

// Only pages that exist in the static export (trailingSlash: true), no redirects or 404s.
export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();

  const projectEntries: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${SITE_URL}/projects/${project.slug}/`,
    lastModified: new Date(project.date),
    changeFrequency: 'yearly',
    priority: 0.6,
    images: [`${SITE_URL}${project.image}`],
  }));

  return [
    {
      url: `${SITE_URL}/`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 1,
      images: [`${SITE_URL}/images/me.jpg`],
    },
    {
      url: `${SITE_URL}/about/`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/projects/`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/services/`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/resume/`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/contact/`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    ...projectEntries,
  ];
}
