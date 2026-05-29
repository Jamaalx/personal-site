export interface Skill {
  title: string;
  competency: number;
  category: string[];
}

export interface Category {
  name: string;
  color: string;
  /** Pre-computed text color for contrast - 'dark' for light backgrounds, 'light' for dark */
  textColor: 'dark' | 'light';
}

const skills: Skill[] = [
  // Languages
  { title: 'TypeScript', competency: 5, category: ['Languages'] },
  { title: 'JavaScript', competency: 5, category: ['Languages'] },
  { title: 'Python', competency: 4, category: ['Languages'] },
  { title: 'SQL', competency: 4, category: ['Languages', 'Databases'] },
  { title: 'Dart', competency: 3, category: ['Languages'] },

  // Web & Frameworks
  { title: 'Next.js', competency: 5, category: ['Web Development'] },
  { title: 'React', competency: 5, category: ['Web Development'] },
  { title: 'Node.js', competency: 5, category: ['Web Development'] },
  { title: 'Tailwind CSS', competency: 5, category: ['Web Development'] },
  { title: 'Flutter', competency: 3, category: ['Web Development'] },

  // AI
  { title: 'OpenAI API', competency: 5, category: ['AI'] },
  { title: 'Claude API', competency: 5, category: ['AI'] },
  { title: 'AI Agents', competency: 4, category: ['AI'] },
  { title: 'RAG', competency: 4, category: ['AI'] },
  { title: 'Vercel AI SDK', competency: 4, category: ['AI'] },
  { title: 'Prompt Engineering', competency: 4, category: ['AI'] },

  // Databases
  { title: 'PostgreSQL', competency: 5, category: ['Databases'] },
  { title: 'Supabase', competency: 5, category: ['Databases', 'Infrastructure'] },
  { title: 'pgvector', competency: 4, category: ['Databases', 'AI'] },

  // Payments & APIs
  { title: 'Stripe', competency: 5, category: ['Payments'] },
  { title: 'REST API Integration', competency: 5, category: ['Web Development'] },
  { title: 'MyPOS', competency: 3, category: ['Payments'] },

  // Infrastructure & DevOps
  { title: 'Vercel', competency: 5, category: ['Infrastructure'] },
  { title: 'Cloudflare', competency: 4, category: ['Infrastructure'] },
  { title: 'Railway', competency: 4, category: ['Infrastructure'] },
  { title: 'Coolify', competency: 4, category: ['Infrastructure'] },
  { title: 'Hetzner', competency: 3, category: ['Infrastructure'] },
  { title: 'Docker', competency: 3, category: ['Infrastructure'] },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

/**
 * Category colors with pre-computed text contrast.
 */
const CATEGORY_COLORS: { color: string; textColor: 'dark' | 'light' }[] = [
  { color: 'var(--color-skill-1)', textColor: 'light' },
  { color: 'var(--color-skill-2)', textColor: 'dark' },
  { color: 'var(--color-skill-3)', textColor: 'light' },
  { color: 'var(--color-skill-4)', textColor: 'light' },
  { color: 'var(--color-skill-5)', textColor: 'dark' },
  { color: 'var(--color-skill-6)', textColor: 'dark' },
];

const FALLBACK_COLORS: { color: string; textColor: 'dark' | 'light' }[] = [
  { color: '#3896e2', textColor: 'dark' },
  { color: '#c3423f', textColor: 'light' },
  { color: '#d75858', textColor: 'light' },
  { color: '#747fff', textColor: 'light' },
  { color: '#64cb7b', textColor: 'dark' },
];

function buildCategories(skillsList: Skill[]): Category[] {
  const uniqueCategories = Array.from(
    new Set(skillsList.flatMap(({ category }) => category)),
  ).sort();

  const allColors = [...CATEGORY_COLORS, ...FALLBACK_COLORS];

  if (
    process.env.NODE_ENV === 'development' &&
    uniqueCategories.length > allColors.length
  ) {
    console.warn(
      `[skills.ts] Warning: ${uniqueCategories.length} categories but only ${allColors.length} colors defined`,
    );
  }

  return uniqueCategories.map((category, index) => {
    const colorConfig = allColors[index] ?? {
      color: '#888888',
      textColor: 'light' as const,
    };
    return {
      name: category,
      color: colorConfig.color,
      textColor: colorConfig.textColor,
    };
  });
}

const categories: Category[] = buildCategories(skills);

export { categories, skills };
