import type { SanityImage as SanityImageType } from '@/types/sanity';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { NeonButton } from './NeonButton';
import { SanityImage } from './SanityImage';

type HeroWithHeadshotProps = {
  title: string;
  subtitle?: string;
  headshot?: SanityImageType | {
    image: SanityImageType;
    alt?: string;
  } | string;
  headshotAlt?: string;
  primaryCTA?: {
    label: string;
    href: string;
  };
  secondaryCTA?: {
    label: string;
    href: string;
  };
  badge?: string;
  socialLinks?: {
    twitter?: string;
    github?: string;
    linkedin?: string;
    instagram?: string;
    youtube?: string;
  };
};

export function HeroWithHeadshot({
  title,
  subtitle,
  headshot,
  headshotAlt = 'Profile picture',
  primaryCTA,
  secondaryCTA,
  badge,
  socialLinks,
}: HeroWithHeadshotProps) {
  return (
    <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden">
      {/* Floating Orbs Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="animate-floating-orbs absolute top-20 left-10 h-72 w-72 rounded-full bg-aqua/20 blur-3xl" />
        <div className="animate-floating-orbs absolute right-10 bottom-20 h-96 w-96 rounded-full bg-neonPink/20 blur-3xl" style={{ animationDelay: '1s' }} />
        <div className="animate-floating-orbs absolute top-1/2 left-1/2 h-64 w-64 rounded-full bg-purpleGlow blur-3xl" style={{ animationDelay: '2s' }} />
      </div>

      {/* Neon Gradient Background */}
      <div className="bg-surface-glow absolute inset-0 opacity-30" />
      <div className="absolute inset-0 bg-linear-to-b from-neonPink/20 via-transparent to-aqua/20" />

      {/* Grid Glow Effect */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(rgba(56,253,253,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(56,253,253,0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className={cn(
          'flex flex-col items-center gap-12 lg:flex-row lg:gap-16',
          headshot ? 'lg:items-center' : 'justify-center text-center',
        )}
        >
          {/* Headshot Image - Left Side */}
          {headshot && (
            <div className="relative order-2 shrink-0 lg:order-1">
              <div className="relative h-48 w-48 overflow-hidden rounded-full border-4 border-aqua/30 shadow-glow-aqua md:h-64 md:w-64 lg:h-80 lg:w-80">
                <div className="absolute inset-0 animate-pulse bg-linear-to-br from-aqua/20 to-neonPink/20" />
                <div className="relative h-full w-full">
                  {typeof headshot === 'string'
                    ? (
                        <Image
                          src={headshot}
                          alt={headshotAlt}
                          fill
                          className="object-cover"
                          priority
                        />
                      )
                    : (
                        <SanityImage
                          image={typeof headshot === 'object' && 'image' in headshot ? headshot.image : headshot}
                          alt={typeof headshot === 'object' && 'alt' in headshot ? headshot.alt || headshotAlt : headshotAlt}
                          fill
                          className="object-cover"
                          priority
                        />
                      )}
                </div>
              </div>
              {/* Outer glow ring */}
              <div className="absolute inset-0 animate-ping rounded-full border-2 border-aqua/20" style={{ animationDuration: '3s' }} />
            </div>
          )}

          {/* Content - Right Side */}
          <div className={cn(
            'order-1 flex-1 lg:order-2',
            headshot ? 'text-center lg:text-left' : 'text-center',
          )}
          >
            {badge && (
              <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-pill border border-aqua/30 bg-aqua/10 px-4 py-2 text-sm font-medium text-aqua shadow-glow-aqua lg:mx-0">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-aqua opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-aqua"></span>
                </span>
                {badge}
              </div>
            )}

            <h1 className="mb-6 bg-clip-text font-heading text-4xl font-bold drop-shadow-[0_0_30px_rgba(56,253,253,0.5)] md:text-5xl lg:text-6xl xl:text-7xl">
              {title}
            </h1>

            {subtitle && (
              <p className="mb-8 max-w-3xl text-xl leading-relaxed text-white/80 md:text-2xl">
                {subtitle}
              </p>
            )}

            {(primaryCTA || secondaryCTA) && (
              <div className="mb-8 flex flex-col items-center gap-4 sm:flex-row sm:items-center md:justify-center lg:items-start lg:justify-start">
                {primaryCTA && (
                  <NeonButton href={primaryCTA.href} variant="primary" size="lg">
                    {primaryCTA.label}
                  </NeonButton>
                )}
                {secondaryCTA && (
                  <NeonButton href={secondaryCTA.href} variant="secondary" size="lg" className="hidden md:block">
                    {secondaryCTA.label}
                  </NeonButton>
                )}
              </div>
            )}

            {/* Social Icons */}
            {socialLinks && Object.keys(socialLinks).length > 0 && (
              <div className="flex items-center justify-center gap-4 lg:justify-start">
                {socialLinks.twitter && (
                  <a
                    href={socialLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 transition-colors duration-200 hover:text-aqua hover:drop-shadow-[0_0_8px_rgba(56,253,253,0.5)]"
                    aria-label="Twitter"
                  >
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                    </svg>
                  </a>
                )}
                {socialLinks.github && (
                  <a
                    href={socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 transition-colors duration-200 hover:text-aqua hover:drop-shadow-[0_0_8px_rgba(56,253,253,0.5)]"
                    aria-label="GitHub"
                  >
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </a>
                )}
                {socialLinks.linkedin && (
                  <a
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 transition-colors duration-200 hover:text-aqua hover:drop-shadow-[0_0_8px_rgba(56,253,253,0.5)]"
                    aria-label="LinkedIn"
                  >
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                )}
                {socialLinks.instagram && (
                  <a
                    href={socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 transition-colors duration-200 hover:text-aqua hover:drop-shadow-[0_0_8px_rgba(56,253,253,0.5)]"
                    aria-label="Instagram"
                  >
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                )}
                {socialLinks.youtube && (
                  <a
                    href={socialLinks.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 transition-colors duration-200 hover:text-aqua hover:drop-shadow-[0_0_8px_rgba(56,253,253,0.5)]"
                    aria-label="YouTube"
                  >
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
