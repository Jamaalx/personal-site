import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { AUTHOR_NAME, SITE_URL } from '@/lib/utils';

import BreadcrumbSchema from '../BreadcrumbSchema';

describe('BreadcrumbSchema', () => {
  it('renders Home → page as a BreadcrumbList', () => {
    const { container } = render(
      <BreadcrumbSchema name="About" path="/about/" />,
    );
    const script = container.querySelector(
      'script[type="application/ld+json"]',
    );
    const data = JSON.parse(script?.innerHTML ?? '{}');

    expect(data['@type']).toBe('BreadcrumbList');
    expect(data.itemListElement).toHaveLength(2);
    expect(data.itemListElement[0]).toMatchObject({
      position: 1,
      name: AUTHOR_NAME,
      item: `${SITE_URL}/`,
    });
    expect(data.itemListElement[1]).toMatchObject({
      position: 2,
      name: 'About',
      item: `${SITE_URL}/about/`,
    });
  });
});
