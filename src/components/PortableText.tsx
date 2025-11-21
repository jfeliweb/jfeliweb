import type { SanityImage as SanityImageType } from '@/types/sanity';
import Link from 'next/link';
import { SanityImage } from './SanityImage';

type PortableTextProps = {
  content: any;
  className?: string;
};

export function PortableText({ content, className = '' }: PortableTextProps) {
  if (!content || !Array.isArray(content)) {
    return null;
  }

  const renderBlock = (block: any, index: number) => {
    if (block._type === 'block') {
      const style = block.style || 'normal';
      const children = block.children?.map((child: any, childIndex: number) => {
        let element: React.ReactNode = child.text;

        if (child.marks && child.marks.length > 0) {
          child.marks.forEach((mark: any) => {
            if (typeof mark === 'string') {
              if (mark === 'strong') {
                element = <strong>{element}</strong>;
              } else if (mark === 'em') {
                element = <em>{element}</em>;
              } else if (mark === 'code') {
                element = (
                  <code className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-sm text-aqua">
                    {element}
                  </code>
                );
              } else if (mark === 'underline') {
                element = <u>{element}</u>;
              }
            } else if (mark._type === 'link') {
              const href = mark.href;
              const isExternal = href?.startsWith('http');
              element = (
                <Link
                  href={href}
                  target={isExternal ? '_blank' : undefined}
                  rel={isExternal ? 'noopener noreferrer' : undefined}
                  className="text-aqua underline transition-colors hover:text-neonPink"
                >
                  {element}
                </Link>
              );
            }
          });
        }

        // Generate a unique key combining block index and child index with text content
        const uniqueKey = `${index}-${childIndex}-${child.text?.slice(0, 10) || ''}`;
        return <span key={uniqueKey}>{element}</span>;
      });

      switch (style) {
        case 'h1':
          return (
            <h1
              key={index}
              className="mt-8 mb-6 font-heading text-4xl font-bold text-white first:mt-0 md:text-5xl"
            >
              {children}
            </h1>
          );
        case 'h2':
          return (
            <h2
              key={index}
              className="mt-8 mb-4 font-heading text-3xl font-bold text-white first:mt-0 md:text-4xl"
            >
              {children}
            </h2>
          );
        case 'h3':
          return (
            <h3
              key={index}
              className="mt-6 mb-3 font-heading text-2xl font-semibold text-white first:mt-0 md:text-3xl"
            >
              {children}
            </h3>
          );
        case 'h4':
          return (
            <h4
              key={index}
              className="mt-4 mb-2 font-heading text-xl font-semibold text-white first:mt-0 md:text-2xl"
            >
              {children}
            </h4>
          );
        case 'blockquote':
          return (
            <blockquote
              key={index}
              className="my-6 border-l-4 border-aqua/50 pl-4 text-white/70 italic"
            >
              {children}
            </blockquote>
          );
        default:
          return (
            <p key={index} className="mb-4 leading-relaxed text-white/80">
              {children}
            </p>
          );
      }
    }

    if (block._type === 'image' && block.asset) {
      return (
        <div key={index} className="my-8">
          <SanityImage
            image={block as SanityImageType}
            alt={block.alt || 'Image'}
            width={1200}
            height={600}
            className="w-full rounded-lg"
          />
          {block.caption && (
            <p className="mt-2 text-center text-sm text-white/60 italic">
              {block.caption}
            </p>
          )}
        </div>
      );
    }

    if (block._type === 'code') {
      return (
        <pre
          key={index}
          className="my-6 overflow-x-auto rounded-lg border border-white/10 bg-blue-grey/50 p-4"
        >
          <code className="font-mono text-sm text-aqua">{block.code}</code>
        </pre>
      );
    }

    return null;
  };

  return (
    <div className={`prose prose-invert max-w-none ${className}`}>
      {content.map((block: any, index: number) => renderBlock(block, index))}
    </div>
  );
}
