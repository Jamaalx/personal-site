import contact from '@/data/contact';
import degrees from '@/data/resume/degrees';
import work from '@/data/resume/work';
import { AUTHOR_NAME, SITE_URL } from '@/lib/utils';
import JsonLd from './JsonLd';

export default function PersonSchema() {
  // Extract social links for sameAs (excluding email)
  const socialLinks = contact
    .filter((item) => !item.link.startsWith('mailto:'))
    .map((item) => item.link);

  // Extract email from contact data
  const emailItem = contact.find((item) => item.link.startsWith('mailto:'));
  const email = emailItem?.link.replace('mailto:', '');

  // Current job from work.ts (first entry)
  const currentJob = work[0];

  const personData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': `${SITE_URL}/#person`,
        name: AUTHOR_NAME,
        url: `${SITE_URL}/`,
        image: `${SITE_URL}/images/me.jpg`,
        jobTitle: currentJob.position,
        ...(email && { email }),
        // Profile pages only (chat links like wa.me are not identities)
        sameAs: socialLinks.filter((link) => !link.includes('wa.me')),
        worksFor: {
          '@type': 'Organization',
          '@id': 'https://zed-zen.com/#organization',
          name: 'ZED-ZEN',
          url: currentJob.url,
        },
        knowsAbout: [
          'Next.js',
          'Supabase',
          'Flutter',
          'TypeScript',
          'AI agents',
          'HoReCa software',
        ],
        alumniOf: degrees.map((degree) => ({
          '@type': 'CollegeOrUniversity',
          name: degree.school,
          url: degree.link,
        })),
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: `${SITE_URL}/`,
        name: AUTHOR_NAME,
        inLanguage: 'en',
        publisher: { '@id': `${SITE_URL}/#person` },
      },
      {
        '@type': 'ProfilePage',
        '@id': `${SITE_URL}/#profile`,
        url: `${SITE_URL}/`,
        name: `${AUTHOR_NAME} — Full-Stack Developer & Founder of ZED-ZEN`,
        isPartOf: { '@id': `${SITE_URL}/#website` },
        mainEntity: { '@id': `${SITE_URL}/#person` },
      },
    ],
  };

  return <JsonLd data={personData} />;
}
