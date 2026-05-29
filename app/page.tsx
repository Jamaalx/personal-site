import type { Metadata } from 'next';

import { PersonSchema } from '@/components/Schema';
import Hero from '@/components/Template/Hero';
import PageWrapper from '@/components/Template/PageWrapper';

export const metadata: Metadata = {
  description:
    'Product builder and founder of ZED-ZEN. Shipping web apps, mobile apps, AI agents, and integrations with Next.js, Supabase, Flutter, and AI-native workflows.',
};

export default function HomePage() {
  return (
    <PageWrapper>
      <PersonSchema />
      <Hero />
    </PageWrapper>
  );
}
