import type { Metadata } from 'next';
import Link from 'next/link';
import { CategoryTag } from '@/components/CategoryTag';
import { NeonGlowPanel } from '@/components/NeonGlowPanel';
import { NeonHeading } from '@/components/NeonHeading';
import { Section } from '@/components/Section';
import { SiteLayout } from '@/components/SiteLayout';
import { getLabs } from '@/lib/api';

export const metadata: Metadata = {
  title: 'Labs | jFeliWeb Creator Studio',
  description: 'Experimental concepts, prototypes, and work-in-progress projects. Explore our creative experiments.',
  openGraph: {
    title: 'Labs | jFeliWeb Creator Studio',
    description: 'Experimental concepts, prototypes, and work-in-progress projects',
    type: 'website',
  },
};

export default async function LabsPage() {
  const labs = await getLabs();

  return (
    <SiteLayout>
      <Section withRadialGlow>
        <div className="mb-12 text-center">
          <NeonHeading size="h1" withUnderline className="mb-4">
            Labs
          </NeonHeading>
          <p className="mx-auto max-w-2xl text-xl text-white/70">
            Experimental concepts, prototypes, and work-in-progress projects.
          </p>
        </div>

        {labs.length > 0
          ? (
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {labs.map(lab => (
                  <Link key={lab._id} href={`/labs/${lab.slug.current}`}>
                    <NeonGlowPanel className="h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-glow-aqua">
                      <div className="mb-4">
                        <div className="mb-2 flex items-center justify-between">
                          <h3 className="font-heading text-2xl font-semibold text-white transition-colors group-hover:text-aqua">
                            {lab.title}
                          </h3>
                          {lab.status && (
                            <span className="rounded-pill border border-aqua/30 bg-aqua/20 px-3 py-1 text-xs font-medium text-aqua">
                              {lab.status}
                            </span>
                          )}
                        </div>
                        {lab.shortDescription && (
                          <p className="mb-4 line-clamp-2 text-sm text-white/70">
                            {lab.shortDescription}
                          </p>
                        )}
                      </div>
                      {lab.tags && lab.tags.length > 0 && (
                        <div className="flex flex-wrap items-center gap-2">
                          {lab.tags.map(tag => (
                            <CategoryTag key={tag} label={tag} />
                          ))}
                        </div>
                      )}
                    </NeonGlowPanel>
                  </Link>
                ))}
              </div>
            )
          : (
              <div className="py-12 text-center">
                <p className="text-lg text-white/70">No lab experiments available at the moment.</p>
                <p className="mt-2 text-sm text-white/50">Check back soon for new experiments!</p>
              </div>
            )}
      </Section>
    </SiteLayout>
  );
}
