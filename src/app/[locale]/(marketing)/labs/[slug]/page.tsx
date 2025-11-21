import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CategoryTag } from '@/components/CategoryTag';
import { NeonButton } from '@/components/NeonButton';
import { NeonHeading } from '@/components/NeonHeading';
import { PortableText } from '@/components/PortableText';
import { SanityImage } from '@/components/SanityImage';
import { Section } from '@/components/Section';
import { SiteLayout } from '@/components/SiteLayout';
import { getLabBySlug, getLabs } from '@/lib/api';
import { urlFor } from '@/lib/image';

export async function generateStaticParams() {
  const labs = await getLabs();
  return labs.map(lab => ({
    slug: lab.slug.current,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const lab = await getLabBySlug(slug);

  if (!lab) {
    return {
      title: 'Lab Not Found',
    };
  }

  const imageUrl = lab.image ? urlFor(lab.image).width(1200).height(630).url() : undefined;

  return {
    title: `${lab.title} | jFeliWeb Creator Studio`,
    description: lab.shortDescription || lab.title,
    openGraph: {
      title: lab.title,
      description: lab.shortDescription || lab.title,
      type: 'website',
      images: imageUrl ? [{ url: imageUrl }] : undefined,
    },
  };
}

export default async function LabPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const lab = await getLabBySlug(slug);

  if (!lab) {
    notFound();
  }

  return (
    <SiteLayout>
      <Section withRadialGlow>
        <article className="mx-auto max-w-4xl">
          {lab.image && (
            <div className="relative mb-8 h-64 w-full overflow-hidden rounded-lg border border-white/10 shadow-soft md:h-96">
              <SanityImage
                image={lab.image}
                alt={lab.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          <div className="mb-6">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-4">
              <NeonHeading size="h1">
                {lab.title}
              </NeonHeading>
              {lab.status && (
                <span className="rounded-pill border border-aqua/30 bg-aqua/20 px-4 py-2 text-sm font-medium text-aqua">
                  {lab.status}
                </span>
              )}
            </div>

            {lab.tags && lab.tags.length > 0 && (
              <div className="mb-4 flex flex-wrap items-center gap-2">
                {lab.tags.map(tag => (
                  <CategoryTag key={tag} label={tag} />
                ))}
              </div>
            )}
          </div>

          {lab.shortDescription && (
            <p className="mb-8 text-xl leading-relaxed text-white/80">
              {lab.shortDescription}
            </p>
          )}

          <div className="mb-8">
            <PortableText content={lab.description} />
          </div>

          {lab.url && (
            <div className="mt-8">
              <NeonButton
                href={lab.url}
                variant="primary"
                size="lg"
                external
              >
                View Experiment
              </NeonButton>
            </div>
          )}
        </article>
      </Section>
    </SiteLayout>
  );
}
