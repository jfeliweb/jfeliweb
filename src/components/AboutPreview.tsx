import type { SanityImage as SanityImageType } from '@/types/sanity';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { NeonButton } from './NeonButton';
import { PortableText } from './PortableText';
import { SanityImage } from './SanityImage';

type AboutPreviewProps = {
  headshot?: SanityImageType | {
    image: SanityImageType;
    alt?: string;
  } | string;
  headshotAlt?: string;
  description?: any; // Portable text or string
  className?: string;
};

export function AboutPreview({
  headshot,
  headshotAlt = 'Profile picture',
  description,
  className,
}: AboutPreviewProps) {
  // Extract text from portable text for excerpt
  const getExcerpt = (content: any): string => {
    if (typeof content === 'string') {
      return content.length > 200 ? `${content.substring(0, 200)}...` : content;
    }
    if (Array.isArray(content)) {
      const text = content
        .filter((block: any) => block._type === 'block')
        .map((block: any) =>
          block.children
            ?.filter((child: any) => child._type === 'span')
            .map((child: any) => child.text)
            .join(''),
        )
        .join(' ')
        .trim();
      return text.length > 200 ? `${text.substring(0, 200)}...` : text;
    }
    return '';
  };

  const excerpt = description ? getExcerpt(description) : '';

  return (
    <div className={cn('grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-12', className)}>
      {/* Headshot Image */}
      {headshot && (
        <div className="relative order-2 shrink-0 md:order-1">
          <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-2xl border border-white/10 shadow-soft">
            <div className="absolute inset-0 bg-linear-to-br from-aqua/10 to-neonPink/10" />
            <div className="relative h-full w-full">
              {typeof headshot === 'string'
                ? (
                    <Image
                      src={headshot}
                      alt={headshotAlt}
                      fill
                      className="object-cover"
                    />
                  )
                : (
                    <SanityImage
                      image={typeof headshot === 'object' && 'image' in headshot ? headshot.image : headshot}
                      alt={typeof headshot === 'object' && 'alt' in headshot ? headshot.alt || headshotAlt : headshotAlt}
                      fill
                      className="object-cover"
                    />
                  )}
            </div>
            {/* Soft white glow */}
            <div className="pointer-events-none absolute inset-0 shadow-[0_0_40px_rgba(255,255,255,0.1)]" />
          </div>
        </div>
      )}

      {/* Content */}
      <div className="order-1 md:order-2">
        <h2 className="mb-4 font-heading text-3xl font-bold text-white md:text-4xl">
          About Me
        </h2>
        {description && (
          <div className="mb-6 leading-relaxed text-white/80">
            {typeof description === 'string'
              ? (
                  <p>{excerpt}</p>
                )
              : (
                  <div className="prose prose-invert max-w-none">
                    <PortableText content={description} />
                  </div>
                )}
          </div>
        )}
        <NeonButton href="/about" variant="secondary">
          Learn More
        </NeonButton>
      </div>
    </div>
  );
}
