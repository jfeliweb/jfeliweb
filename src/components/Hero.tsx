import { NeonButton } from './NeonButton';

type HeroProps = {
  title: string;
  subtitle?: string;
  primaryCTA?: {
    label: string;
    href: string;
  };
  secondaryCTA?: {
    label: string;
    href: string;
  };
};

export function Hero({ title, subtitle, primaryCTA, secondaryCTA }: HeroProps) {
  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden">
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

      <div className="relative z-10 mx-auto max-w-7xl animate-fade-up px-4 text-center sm:px-6 lg:px-8">
        <h1 className="bg-button-primary mb-6 bg-clip-text font-heading text-4xl font-bold text-transparent drop-shadow-[0_0_30px_rgba(56,253,253,0.5)] md:text-6xl lg:text-7xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mx-auto mb-8 max-w-3xl text-xl leading-relaxed text-white/80 md:text-2xl">
            {subtitle}
          </p>
        )}

        {(primaryCTA || secondaryCTA) && (
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            {primaryCTA && (
              <NeonButton href={primaryCTA.href} variant="primary" size="lg">
                {primaryCTA.label}
              </NeonButton>
            )}
            {secondaryCTA && (
              <NeonButton href={secondaryCTA.href} variant="secondary" size="lg">
                {secondaryCTA.label}
              </NeonButton>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
