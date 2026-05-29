import type { Metadata } from 'next';
import Link from 'next/link';

import PageWrapper from '@/components/Template/PageWrapper';
import services from '@/data/services';
import { createPageMetadata } from '@/lib/metadata';

export const metadata: Metadata = createPageMetadata({
  title: 'Services',
  description:
    'Freelance services by Alex Mantello — SaaS MVP development, AI apps & agents, BI dashboards, B2B e-commerce, mobile apps, brand sites, and managed hosting on a Hetzner dedicated server.',
  path: '/services/',
});

export default function ServicesPage() {
  return (
    <PageWrapper>
      <section className="services-page">
        <header className="services-header">
          <h1 className="page-title">Services</h1>
          <p className="page-subtitle">
            What I can build for you — based on real projects I&apos;ve shipped.
          </p>
        </header>

        <div className="services-grid">
          {services.map((s) => (
            <article key={s.title} className="service-card">
              <header className="service-card-header">
                <h2 className="service-card-title">{s.title}</h2>
                <p className="service-card-tagline">{s.tagline}</p>
              </header>

              <p className="service-card-desc">{s.description}</p>

              <ul className="service-card-bullets">
                {s.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>

              {s.examples && s.examples.length > 0 && (
                <div className="service-card-examples">
                  <span className="service-card-examples-label">
                    Built before:
                  </span>
                  {s.examples.map((ex, i) => (
                    <span key={ex} className="service-card-example">
                      {ex}
                      {i < (s.examples?.length ?? 0) - 1 && ' · '}
                    </span>
                  ))}
                </div>
              )}

              {s.pricing && (
                <div className="service-card-pricing">{s.pricing}</div>
              )}
            </article>
          ))}
        </div>

        <footer className="services-cta">
          <h2 className="services-cta-title">Have a project in mind?</h2>
          <p className="services-cta-text">
            I take on a few freelance and contract engagements alongside running
            ZED-ZEN. Tell me what you&apos;re building and I&apos;ll tell you
            honestly whether I can help.
          </p>
          <Link href="/contact" className="button button-primary">
            Get in Touch
          </Link>
        </footer>
      </section>
    </PageWrapper>
  );
}
