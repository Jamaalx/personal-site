import projects from '@/data/projects';
import services from '@/data/services';
import { AUTHOR_NAME, SITE_URL } from '@/lib/utils';

export const dynamic = 'force-static';

// Plain-text summary for AI assistants (llmstxt.org), built from the same data as the pages.
export function GET() {
  const body = `# ${AUTHOR_NAME}

> ${AUTHOR_NAME} is a full-stack developer and the founder of ZED-ZEN (https://zed-zen.com), a Romanian studio that builds web apps, mobile apps, AI agents and integrations, mostly for hospitality (HoReCa), retail and the public sector. Stack: Next.js, Supabase, Flutter, TypeScript, AI-native workflows. This is his personal portfolio, in English.

## Pages

- [About](${SITE_URL}/about/): background, from hospitality operations to software.
- [Projects](${SITE_URL}/projects/): case studies with screenshots and stack.
- [Services](${SITE_URL}/services/): what he builds for clients.
- [Resume](${SITE_URL}/resume/): work history, skills, education.
- [Contact](${SITE_URL}/contact/): email alex@zed-zen.com, LinkedIn, GitHub.
- Agency site (Romanian and English): https://zed-zen.com

## Projects

${projects
  .map(
    (p) =>
      `- [${p.title}](${SITE_URL}/projects/${p.slug}/)${p.subtitle ? ` — ${p.subtitle}` : ''}: ${p.desc}${p.externalLink ? ` Live: ${p.externalLink}` : ''}`,
  )
  .join('\n')}

## Services

${services.map((s) => `- ${s.title}: ${s.tagline}`).join('\n')}
`;
  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
