import type { Metadata } from 'next';

import Education from '@/components/Resume/Education';
import Experience from '@/components/Resume/Experience';
import ResumeNav from '@/components/Resume/ResumeNav';
import Skills from '@/components/Resume/Skills';
import Testimonials from '@/components/Resume/Testimonials';
import PageWrapper from '@/components/Template/PageWrapper';
import degrees from '@/data/resume/degrees';
import { categories, skills } from '@/data/resume/skills';
import work from '@/data/resume/work';
import testimonials from '@/data/testimonials';
import { createPageMetadata } from '@/lib/metadata';

export const metadata: Metadata = createPageMetadata({
  title: 'Resume',
  description:
    'Resume of Alex Mantello — full-stack developer, founder of ZED-ZEN, building production SaaS with Next.js, Supabase, OpenAI, and Stripe.',
  path: '/resume/',
});

export default function ResumePage() {
  return (
    <PageWrapper>
      <section className="resume-page">
        <header className="resume-header">
          <h1 className="resume-title">Resume</h1>
          <p className="resume-summary">
            Full-stack developer and founder of ZED-ZEN (FORTITUDO VINCIT SRL),
            a software studio in Mureș, Romania. I&apos;ve shipped 20+
            production SaaS and AI-powered web apps for clients across
            hospitality, retail, education, and the public sector. End-to-end
            ownership — from product design and database architecture to AI
            integration, payments, and deployment.
          </p>
        </header>

        <ResumeNav />

        <div className="resume-content">
          <section id="experience" className="resume-section">
            <Experience data={work} />
          </section>

          <section id="education" className="resume-section">
            <Education data={degrees} />
          </section>

          <section id="skills" className="resume-section">
            <Skills skills={skills} categories={categories} />
          </section>

          <section id="testimonials" className="resume-section">
            <Testimonials data={testimonials} />
          </section>
        </div>
      </section>
    </PageWrapper>
  );
}
