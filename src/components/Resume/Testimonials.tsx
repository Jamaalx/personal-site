import type { Testimonial } from '@/data/testimonials';
import { formatDate } from '@/lib/utils';

interface TestimonialsProps {
  data: Testimonial[];
}

export default function Testimonials({ data }: TestimonialsProps) {
  return (
    <div className="testimonials">
      <h2 className="resume-section-title">Recommendations</h2>
      <p className="testimonials-intro">
        From clients and collaborators on LinkedIn.
      </p>
      <div className="testimonials-grid">
        {data.map((t) => (
          <article key={t.name} className="testimonial-card">
            <blockquote className="testimonial-text">
              {t.text.split('\n\n').map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </blockquote>
            <footer className="testimonial-meta">
              <div className="testimonial-name">{t.name}</div>
              <div className="testimonial-role">{t.role}</div>
              <div className="testimonial-context">
                {t.relationship} · {formatDate(t.date)}
              </div>
            </footer>
          </article>
        ))}
      </div>
    </div>
  );
}
