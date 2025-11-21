import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CategoryTag } from '@/components/CategoryTag';
import { NeonButton } from '@/components/NeonButton';
import { NeonHeading } from '@/components/NeonHeading';
import { PortableText } from '@/components/PortableText';
import { SanityImage } from '@/components/SanityImage';
import { Section } from '@/components/Section';
import { SiteLayout } from '@/components/SiteLayout';
import { getProjectBySlug, getProjects } from '@/lib/api';
import { urlFor } from '@/lib/image';

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map(project => ({
    slug: project.slug.current,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  // Handle mainImage: can be imageWithAlt object { image, alt } or direct SanityImage
  const image = project.mainImage && 'image' in project.mainImage
    ? project.mainImage.image
    : project.mainImage || project.image;
  const imageUrl = image ? urlFor(image).width(1200).height(630).url() : undefined;

  return {
    title: `${project.title} | jFeliWeb Creator Studio`,
    description: project.shortDescription || project.title,
    openGraph: {
      title: project.title,
      description: project.shortDescription || project.title,
      type: 'website',
      images: imageUrl ? [{ url: imageUrl }] : undefined,
    },
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  // Handle mainImage: can be imageWithAlt object { image, alt } or direct SanityImage
  const image = project.mainImage && 'image' in project.mainImage
    ? project.mainImage.image
    : project.mainImage || project.image;
  const imageAlt = project.mainImage && 'image' in project.mainImage && project.mainImage.alt
    ? project.mainImage.alt
    : project.title;

  // Use body (portableText) if available, fallback to description
  const content = project.body || project.description;

  return (
    <SiteLayout>
      <Section withRadialGlow>
        <article className="mx-auto max-w-4xl">
          {image && (
            <div className="relative mb-8 h-64 w-full overflow-hidden rounded-lg border border-white/10 shadow-soft md:h-96">
              <SanityImage
                image={image}
                alt={imageAlt}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          <div className="mb-6">
            <NeonHeading size="h1" className="mb-4">
              {project.title}
            </NeonHeading>

            {project.technologies && project.technologies.length > 0 && (
              <div className="mb-4 flex flex-wrap items-center gap-2">
                {project.technologies.map(tech => (
                  <CategoryTag key={tech} label={tech} />
                ))}
              </div>
            )}

            {project.tags && project.tags.length > 0 && (
              <div className="mb-4 flex flex-wrap items-center gap-2">
                {project.tags.map(tag => (
                  <CategoryTag key={tag} label={tag} />
                ))}
              </div>
            )}
          </div>

          {project.shortDescription && (
            <p className="mb-8 text-xl leading-relaxed text-white/80">
              {project.shortDescription}
            </p>
          )}

          {content && (
            <div className="mb-8">
              <PortableText content={content} />
            </div>
          )}

          <div className="mt-8 flex flex-wrap gap-4">
            {(project.liveUrl || project.url) && (
              <NeonButton
                href={project.liveUrl || project.url}
                variant="primary"
                size="lg"
                external
              >
                View Live
              </NeonButton>
            )}
            {(project.githubRepo || project.githubUrl) && (
              <NeonButton
                href={project.githubRepo || project.githubUrl}
                variant="secondary"
                size="lg"
                external
              >
                View Code
              </NeonButton>
            )}
          </div>
        </article>
      </Section>
    </SiteLayout>
  );
}
