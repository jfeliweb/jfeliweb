import type { SanityImage as SanityImageType } from '@/types/sanity';
import Image from 'next/image';
import { urlFor } from '@/lib/image';
import { cn } from '@/lib/utils';

const objectFitClasses = {
  'contain': 'object-contain',
  'cover': 'object-cover',
  'fill': 'object-fill',
  'none': 'object-none',
  'scale-down': 'object-scale-down',
} as const;

type SanityImageProps = {
  image: SanityImageType;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
  fill?: boolean;
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
};

export function SanityImage({
  image,
  alt,
  width,
  height,
  className,
  priority = false,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  fill = false,
  objectFit = 'cover',
}: SanityImageProps) {
  if (!image?.asset) {
    return null;
  }

  const imageUrl = urlFor(image)
    .width(width || 800)
    .height(height || 600)
    .quality(90)
    .url();

  if (fill) {
    return (
      <div className={cn('relative h-full w-full', className)}>
        <Image
          src={imageUrl}
          alt={alt}
          fill
          className={cn('rounded-lg', objectFitClasses[objectFit])}
          priority={priority}
          sizes={sizes}
        />
      </div>
    );
  }

  if (!width || !height) {
    return null;
  }

  return (
    <Image
      src={imageUrl}
      alt={alt}
      width={width}
      height={height}
      className={cn(objectFitClasses[objectFit], className)}
      priority={priority}
      sizes={sizes}
    />
  );
}
