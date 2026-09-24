import dayjs from 'dayjs';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { JsonLd } from '@/components/Schema';
import PageWrapper from '@/components/Template/PageWrapper';
import projects from '@/data/projects';
import { createPageMetadata } from '@/lib/metadata';
import { AUTHOR_NAME, SITE_URL } from '@/lib/utils';

// Meta description: first full sentences that fit in ~160 characters.
function shortDescription(text: string, max = 160): string {
  if (text.length <= max) return text;
  const cut = text.slice(0, max);
  const end = cut.lastIndexOf('. ');
  return end > 80
    ? cut.slice(0, end + 1)
    : `${cut.slice(0, cut.lastIndexOf(' '))}…`;
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return createPageMetadata({
    title: `${project.title} case study`,
    description: shortDescription(project.desc),
    path: `/projects/${slug}/`,
  });
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <PageWrapper mainClassName="page-main--wide">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'CreativeWork',
              '@id': `${SITE_URL}/projects/${project.slug}/#work`,
              name: project.title,
              ...(project.subtitle
                ? { alternativeHeadline: project.subtitle }
                : {}),
              description: project.desc,
              url: `${SITE_URL}/projects/${project.slug}/`,
              image: `${SITE_URL}${project.image}`,
              dateCreated: project.date,
              creator: { '@id': `${SITE_URL}/#person`, name: AUTHOR_NAME },
              ...(project.tech ? { keywords: project.tech.join(', ') } : {}),
              ...(project.externalLink ? { sameAs: project.externalLink } : {}),
            },
            {
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
                  name: 'Projects',
                  item: `${SITE_URL}/projects/`,
                },
                {
                  '@type': 'ListItem',
                  position: 3,
                  name: project.title,
                  item: `${SITE_URL}/projects/${project.slug}/`,
                },
              ],
            },
          ],
        }}
      />
      <article className="case-study">
        <header className="case-study-header">
          <nav aria-label="Breadcrumb">
            <Link href="/projects/" className="case-study-back">
              ← All projects
            </Link>
          </nav>
          <h1 className="case-study-title">{project.title}</h1>
          {project.subtitle && (
            <p className="case-study-subtitle">{project.subtitle}</p>
          )}
          <div className="case-study-meta">
            <time dateTime={project.date}>
              {dayjs(project.date).format('MMMM YYYY')}
            </time>
            {project.externalLink && (
              <>
                <span className="case-study-meta-sep">·</span>
                <a
                  href={project.externalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="case-study-live-link"
                >
                  Visit live site ↗
                </a>
              </>
            )}
          </div>
        </header>

        {project.tech && project.tech.length > 0 && (
          <div className="case-study-tech">
            {project.tech.map((t) => (
              <span key={t} className="tech-tag">
                {t}
              </span>
            ))}
          </div>
        )}

        <section className="case-study-body">
          {(project.longDesc ?? project.desc).split('\n\n').map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </section>

        {project.gallery && project.gallery.length > 0 && (
          <section className="case-study-gallery">
            <h2 className="case-study-gallery-title">Walkthrough</h2>
            <div className="case-study-gallery-grid">
              {project.gallery.map((img, i) => (
                <figure key={img.src} className="case-study-gallery-item">
                  <div className="case-study-gallery-image">
                    <Image
                      src={img.src}
                      alt={img.caption}
                      width={1600}
                      height={1000}
                      sizes="(max-width: 800px) 100vw, 900px"
                      loading={i < 2 ? 'eager' : 'lazy'}
                    />
                  </div>
                  <figcaption className="case-study-gallery-caption">
                    {img.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>
        )}

        <footer className="case-study-footer">
          <Link href="/projects" className="button button-secondary">
            ← All projects
          </Link>
          {project.externalLink && (
            <a
              href={project.externalLink}
              target="_blank"
              rel="noopener noreferrer"
              className="button button-primary"
            >
              Visit live site ↗
            </a>
          )}
        </footer>
      </article>
    </PageWrapper>
  );
}
