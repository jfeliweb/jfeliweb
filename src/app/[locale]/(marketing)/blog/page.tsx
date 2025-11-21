import type { Metadata } from 'next';
import { BlogCard } from '@/components/BlogCard';
import { NeonHeading } from '@/components/NeonHeading';
import { Section } from '@/components/Section';
import { SiteLayout } from '@/components/SiteLayout';
import { getBlogPosts } from '@/lib/api';

export const metadata: Metadata = {
  title: 'Blog | jFeliWeb Creator Studio',
  description: 'Thoughts, tutorials, and insights on web development, design, and technology.',
  openGraph: {
    title: 'Blog | jFeliWeb Creator Studio',
    description: 'Thoughts, tutorials, and insights on web development, design, and technology',
    type: 'website',
  },
};

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <SiteLayout>
      <Section withRadialGlow>
        <div className="mb-12 text-center">
          <NeonHeading size="h1" withUnderline className="mb-4">
            Blog
          </NeonHeading>
          <p className="mx-auto max-w-2xl text-xl text-white/70">
            Thoughts, tutorials, and insights on web development, design, and technology.
          </p>
        </div>

        {posts.length > 0
          ? (
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {posts.map(post => (
                  <BlogCard key={post._id} post={post} />
                ))}
              </div>
            )
          : (
              <div className="py-12 text-center">
                <p className="text-lg text-white/70">No blog posts available at the moment.</p>
                <p className="mt-2 text-sm text-white/50">Check back soon for new articles!</p>
              </div>
            )}
      </Section>
    </SiteLayout>
  );
}
