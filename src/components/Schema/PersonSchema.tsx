import contact from '@/data/contact';
// Graful de entități vine din seo-ops (entities/graph.yaml → src/data/entities.json, generat cu
// `seo run entities alexandru gen=1 repo=<repo>`). Aici e SINGURA definiție a lui Alex; restul site-urilor îl referă.
import ENT from '@/data/entities.json';
import degrees from '@/data/resume/degrees';
import work from '@/data/resume/work';
import { AUTHOR_NAME } from '@/lib/utils';
import JsonLd from './JsonLd';

export default function PersonSchema() {
  // Extract email from contact data
  const emailItem = contact.find((item) => item.link.startsWith('mailto:'));
  const email = emailItem?.link.replace('mailto:', '');

  // Current job from work.ts (first entry)
  const currentJob = work[0];

  const personData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        // name, url, image, sameAs, worksFor din graf; aici doar ce ține de pagina proprie
        ...ENT.defines.en.alex,
        jobTitle: currentJob.position,
        ...(email && { email }),
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
      ENT.defines.en.alex_site,
      {
        '@type': 'ProfilePage',
        '@id': `${ENT.refs.alex.url}#profile`,
        url: ENT.refs.alex.url,
        name: `${AUTHOR_NAME} — Full-Stack Developer & Founder of ZED-ZEN`,
        isPartOf: { '@id': ENT.ids.alex_site },
        mainEntity: { '@id': ENT.ids.alex },
      },
    ],
  };

  return <JsonLd data={personData} />;
}
