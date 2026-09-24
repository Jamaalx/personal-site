import type { Metadata } from 'next';

import AboutContent from '@/components/About/Sections';
import PageWrapper from '@/components/Template/PageWrapper';
import { aboutMarkdown } from '@/data/about';
import { createPageMetadata } from '@/lib/metadata';

export const metadata: Metadata = createPageMetadata({
  title: 'About — Full-Stack Developer & ZED-ZEN Founder',
  description:
    'About Alex Mantello — full-stack developer and founder of ZED-ZEN, building SaaS and AI-powered web apps for hospitality and retail.',
  path: '/about/',
});

export default function AboutPage() {
  return (
    <PageWrapper mainClassName="page-main--wide">
      <section className="about-page">
        <header className="about-header">
          <h1 className="page-title">About</h1>
        </header>
        <AboutContent markdown={aboutMarkdown} />
      </section>
    </PageWrapper>
  );
}
