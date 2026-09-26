import { AUTHOR_NAME, SITE_URL } from '@/lib/utils';

import JsonLd from './JsonLd';

interface BreadcrumbSchemaProps {
  name: string;
  path: string;
}

/** BreadcrumbList pentru paginile de pe primul nivel (Acasă → pagină). */
export default function BreadcrumbSchema({
  name,
  path,
}: BreadcrumbSchemaProps) {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: AUTHOR_NAME,
            item: `${SITE_URL}/`,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name,
            item: `${SITE_URL}${path}`,
          },
        ],
      }}
    />
  );
}
