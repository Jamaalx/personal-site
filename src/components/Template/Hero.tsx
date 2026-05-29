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
          SaaS builder and founder of{' '}
          <a href="https://zed-zen.com" className="hero-highlight">
            ZED-ZEN
          </a>
          . I ship production apps for hospitality, retail, and the public
          sector — Next.js + Supabase + AI workflows, end-to-end.
          <br />
          20+ projects in production with real users.
        </p>

        <div className="hero-chips">
          <span className="hero-chip">Next.js + Supabase</span>
          <span className="hero-chip">AI-native workflow</span>
          <span className="hero-chip">HoReCa SaaS</span>
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
