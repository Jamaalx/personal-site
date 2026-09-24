import { describe, expect, it } from 'vitest';

import projects from '@/data/projects';
import { SITE_URL } from '@/lib/utils';
import sitemap from '../sitemap';

describe('sitemap', () => {
  it('lists every exported page with a trailing slash', () => {
    const urls = sitemap().map((entry) => entry.url);

    expect(urls).toEqual(
      expect.arrayContaining([
        `${SITE_URL}/`,
        `${SITE_URL}/about/`,
        `${SITE_URL}/resume/`,
        `${SITE_URL}/projects/`,
        `${SITE_URL}/services/`,
        `${SITE_URL}/contact/`,
      ]),
    );
    expect(urls.every((url) => url.endsWith('/'))).toBe(true);
  });

  it('includes every project case study and no removed routes', () => {
    const urls = sitemap().map((entry) => entry.url);

    for (const project of projects) {
      expect(urls).toContain(`${SITE_URL}/projects/${project.slug}/`);
    }
    expect(urls.some((url) => /\/(writing|stats)\//.test(url))).toBe(false);
  });
});
