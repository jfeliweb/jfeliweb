import type { Metadata } from 'next';
import { NeonHeading } from '@/components/NeonHeading';
import { Section } from '@/components/Section';
import { SiteLayout } from '@/components/SiteLayout';
import { ToolCard } from '@/components/ToolCard';
import { getCategories, getTools } from '@/lib/api';

export const metadata: Metadata = {
  title: 'Tools & Apps | jFeliWeb Creator Studio',
  description: 'Explore our collection of innovative tools and applications designed to enhance your workflow and boost productivity.',
  openGraph: {
    title: 'Tools & Apps | jFeliWeb Creator Studio',
    description: 'Explore our collection of innovative tools and applications',
    type: 'website',
  },
};

export default async function ToolsPage() {
  const [tools, categories] = await Promise.all([getTools(), getCategories()]);

  return (
    <SiteLayout>
      <Section withRadialGlow>
        <div className="mb-12 text-center">
          <NeonHeading size="h1" withUnderline className="mb-4">
            Tools & Apps
          </NeonHeading>
          <p className="mx-auto max-w-2xl text-xl text-white/70">
            Explore our collection of innovative tools and applications designed to enhance your workflow.
          </p>
        </div>

        {categories.length > 0 && (
          <div className="mb-8 flex flex-wrap justify-center gap-2">
            {categories.map(category => (
              <button
                key={category._id}
                type="button"
                className="rounded-pill border border-white/10 bg-white/7 px-4 py-2 text-slate-light transition-all duration-300 hover:border-aqua/30 hover:bg-white/10"
              >
                {category.title}
              </button>
            ))}
          </div>
        )}

        {tools.length > 0
          ? (
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {tools.map(tool => (
                  <ToolCard key={tool._id} tool={tool} />
                ))}
              </div>
            )
          : (
              <div className="py-12 text-center">
                <p className="text-lg text-white/70">No tools available at the moment.</p>
                <p className="mt-2 text-sm text-white/50">Check back soon for new additions!</p>
              </div>
            )}
      </Section>
    </SiteLayout>
  );
}
