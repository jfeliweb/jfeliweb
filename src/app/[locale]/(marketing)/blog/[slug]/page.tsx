import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CategoryTag } from '@/components/CategoryTag';
import { NeonDivider } from '@/components/NeonDivider';
import { NeonHeading } from '@/components/NeonHeading';
import { PortableText } from '@/components/PortableText';
import { SanityImage } from '@/components/SanityImage';
import { Section } from '@/components/Section';
import { SiteLayout } from '@/components/SiteLayout';
import { getBlogPostBySlug, getBlogPosts } from '@/lib/api';
import { urlFor } from '@/lib/image';
import { formatDate } from '@/lib/utils';

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map(post => ({
    slug: post.slug.current,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  const imageUrl = post.mainImage?.image ? urlFor(post.mainImage.image).width(1200).height(630).url() : undefined;

  return {
    title: `${post.title} | jFeliWeb Creator Studio`,
    description: post.description || post.title,
    openGraph: {
      title: post.title,
      description: post.description || post.title,
      type: 'article',
      publishedTime: post.publishedAt,
      images: imageUrl ? [{ url: imageUrl }] : undefined,
    },
  };
}

function calculateReadingTime(content: any): number {
  if (!content || !Array.isArray(content)) {
    return 0;
  }
  const text = content
    .map((block: any) => {
      if (block._type === 'block' && block.children) {
        return block.children.map((child: any) => child.text || '').join(' ');
      }
      return '';
    })
    .join(' ');
  const words = text.split(/\s+/).length;
  return Math.ceil(words / 200); // Average reading speed: 200 words per minute
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const readingTime = calculateReadingTime(post.body);

  return (
    <SiteLayout>
      <Section withRadialGlow>
        <article className="mx-auto max-w-4xl">
          {post.mainImage?.image && (
            <div className="relative mb-8 h-64 w-full overflow-hidden rounded-lg border border-white/10 shadow-soft md:h-96">
              <SanityImage
                image={post.mainImage.image}
                alt={post.mainImage.alt || post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          <div className="mb-6">
            <NeonHeading size="h1" className="mb-4">
              {post.title}
            </NeonHeading>

            <div className="mb-4 flex flex-wrap items-center gap-4 text-sm text-white/60">
              {post.publishedAt && (
                <time>{formatDate(post.publishedAt)}</time>
              )}
              {readingTime > 0 && (
                <span>
                  •
                  {readingTime}
                  {' '}
                  min read
                </span>
              )}
              {post.author && (
                <span>
                  • By
                  {' '}
                  {post.author}
                </span>
              )}
            </div>

            {post.tags && post.tags.length > 0 && (
              <div className="mb-4 flex flex-wrap items-center gap-2">
                {post.tags.map((tag) => {
                  const tagLabel = typeof tag === 'string' ? tag : tag.title;
                  const tagKey = typeof tag === 'string' ? tag : (tag._key || tag._id || tag.title);
                  return <CategoryTag key={tagKey} label={tagLabel} />;
                })}
              </div>
            )}

            {post.description && (
              <p className="mb-8 text-xl leading-relaxed text-white/80 italic">
                {post.description}
              </p>
            )}
          </div>

          <NeonDivider className="mb-8" />

          <div className="mb-8">
            <PortableText content={post.body} />
          </div>
        </article>
      </Section>
    </SiteLayout>
  );
}
