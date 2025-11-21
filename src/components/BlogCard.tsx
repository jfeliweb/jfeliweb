import type { BlogPost } from '@/types/sanity';
import Image from 'next/image';
import Link from 'next/link';
import { urlFor } from '@/lib/image';
import { formatDate } from '@/lib/utils';
import { CategoryTag } from './CategoryTag';

type BlogCardProps = {
  post: BlogPost;
};

export function BlogCard({ post }: BlogCardProps) {
  const image = post.mainImage?.image;
  const imageUrl = image ? urlFor(image).width(400).height(250).url() : null;

  return (
    <Link href={`/blog/${post.slug.current}`}>
      <article className="group bg-card-gradient backdrop-blur-surface relative rounded-lg border border-white/6 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-aqua/30 hover:shadow-glow-aqua">
        {imageUrl && (
          <div className="relative mb-4 h-48 w-full overflow-hidden rounded-md">
            <Image
              src={imageUrl}
              alt={post.mainImage?.alt || post.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        )}

        <div className="mb-2">
          <h3 className="mb-2 font-heading text-xl font-semibold text-white transition-colors group-hover:text-aqua">
            {post.title}
          </h3>
          {post.description && (
            <p className="line-clamp-2 text-sm text-white/70">
              {post.description}
            </p>
          )}
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex flex-wrap items-center gap-2">
            {/* Handle tags - can be strings or tag objects with {title, slug} */}
            {post.tags?.slice(0, 2).map((tag, index) => {
              const tagLabel = typeof tag === 'string'
                ? tag
                : (tag as any)?.title || String(tag);
              const tagKey = typeof tag === 'string'
                ? tag
                : (tag as any)?._key || (tag as any)?._id || `tag-${index}`;
              return (
                <CategoryTag key={tagKey} label={tagLabel} />
              );
            })}
            {/* Handle categories as objects */}
            {post.categories?.slice(0, 2).map(category => (
              <CategoryTag key={category._id} label={category.title} />
            ))}
          </div>
          {post.publishedAt && (
            <time className="text-xs text-white/50">
              {formatDate(post.publishedAt)}
            </time>
          )}
        </div>
      </article>
    </Link>
  );
}
