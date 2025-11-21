import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CategoryTag } from '@/components/CategoryTag';
import { NeonButton } from '@/components/NeonButton';
import { NeonHeading } from '@/components/NeonHeading';
import { PortableText } from '@/components/PortableText';
import { SanityImage } from '@/components/SanityImage';
import { Section } from '@/components/Section';
import { SiteLayout } from '@/components/SiteLayout';
import { getToolBySlug, getTools } from '@/lib/api';
import { urlFor } from '@/lib/image';

export async function generateStaticParams() {
  const tools = await getTools();
  return tools.map(tool => ({
    slug: tool.slug.current,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const tool = await getToolBySlug(slug);

  if (!tool) {
    return {
      title: 'Tool Not Found',
    };
  }

  const imageUrl = tool.image ? urlFor(tool.image).width(1200).height(630).url() : undefined;

  return {
    title: `${tool.title} | jFeliWeb Creator Studio`,
    description: tool.shortDescription || tool.title,
    openGraph: {
      title: tool.title,
      description: tool.shortDescription || tool.title,
      type: 'website',
      images: imageUrl ? [{ url: imageUrl }] : undefined,
    },
  };
}

export default async function ToolPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tool = await getToolBySlug(slug);

  if (!tool) {
    notFound();
  }

  return (
    <SiteLayout>
      <Section withRadialGlow>
        <article className="mx-auto max-w-4xl">
          {tool.image && (
            <div className="relative mb-8 h-64 w-full overflow-hidden rounded-lg border border-white/10 shadow-soft md:h-96">
              <SanityImage
                image={tool.image}
                alt={tool.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          <div className="mb-6">
            <NeonHeading size="h1" className="mb-4">
              {tool.title}
            </NeonHeading>

            <div className="mb-4 flex flex-wrap items-center gap-2">
              {tool.category && (
                <CategoryTag label={tool.category.title} />
              )}
              {tool.tags?.map(tag => (
                <CategoryTag key={tag} label={tag} />
              ))}
            </div>
          </div>

          {tool.shortDescription && (
            <p className="mb-8 text-xl leading-relaxed text-white/80">
              {tool.shortDescription}
            </p>
          )}

          <div className="mb-8">
            <PortableText content={tool.description} />
          </div>

          {tool.url && (
            <div className="mt-8">
              <NeonButton
                href={tool.url}
                variant="primary"
                size="lg"
                external
              >
                Visit Tool
              </NeonButton>
            </div>
          )}
        </article>
      </Section>
    </SiteLayout>
  );
}
