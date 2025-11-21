import type { Tool } from '@/types/sanity';
import Image from 'next/image';
import Link from 'next/link';
import { urlFor } from '@/lib/image';
import { CategoryTag } from './CategoryTag';

type ToolCardProps = {
  tool: Tool;
};

export function ToolCard({ tool }: ToolCardProps) {
  const imageUrl = tool.image ? urlFor(tool.image).width(400).height(250).url() : null;

  return (
    <Link href={`/tools/${tool.slug.current}`}>
      <article className="group bg-card-gradient backdrop-blur-surface relative rounded-lg border border-white/6 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-aqua/30 hover:shadow-glow-aqua">
        {imageUrl && (
          <div className="relative mb-4 h-48 w-full overflow-hidden rounded-md">
            <Image
              src={imageUrl}
              alt={tool.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        )}

        <div className="mb-2 flex items-start justify-between">
          <h3 className="font-heading text-xl font-semibold text-white transition-colors group-hover:text-aqua">
            {tool.title}
          </h3>
        </div>

        {tool.shortDescription && (
          <p className="mb-4 line-clamp-2 text-sm text-white/70">
            {tool.shortDescription}
          </p>
        )}

        <div className="flex flex-wrap items-center gap-2">
          {tool.category && (
            <CategoryTag label={tool.category.title} />
          )}
          {tool.tags?.slice(0, 2).map(tag => (
            <CategoryTag key={tag} label={tag} />
          ))}
        </div>
      </article>
    </Link>
  );
}
