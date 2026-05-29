import Link from 'next/link';

import ThemePortrait from './ThemePortrait';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-avatar">
          <ThemePortrait width={160} height={160} priority />
        </div>

        <h1 className="hero-title">
          <span className="hero-name">Alex Mantello</span>
        </h1>

        <p className="hero-tagline">
          Product builder and founder of{' '}
          <a href="https://zed-zen.com" className="hero-highlight">
            ZED-ZEN
          </a>
          . I ship software for businesses that need it — web apps, mobile
          apps, AI agents, integrations, internal tools.
          <br />
          Next.js · Supabase · Flutter · AI workflows. 20+ projects in
          production.
        </p>

        <div className="hero-chips">
          <span className="hero-chip">Web + Mobile + AI</span>
          <span className="hero-chip">AI-native workflow</span>
          <span className="hero-chip">End-to-end ownership</span>
        </div>

        <div className="hero-cta">
          <Link href="/projects" className="button button-primary">
            View Projects
          </Link>
          <Link href="/contact" className="button button-secondary">
            Get in Touch
          </Link>
        </div>
      </div>

      <div className="hero-bg" aria-hidden="true">
        <div className="hero-gradient" />
      </div>
    </section>
  );
}
