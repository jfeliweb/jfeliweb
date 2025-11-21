import { cn } from '@/lib/utils';

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
  withRadialGlow?: boolean;
};

export function Section({
  children,
  className,
  containerClassName,
  id,
  withRadialGlow = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn('relative px-4 py-20 sm:px-6 lg:px-8', className)}
    >
      {withRadialGlow && (
        <div className="bg-surface-glow pointer-events-none absolute inset-0 opacity-30" />
      )}
      <div
        className={cn(
          'relative z-10 mx-auto w-full max-w-7xl',
          containerClassName,
        )}
      >
        {children}
      </div>
    </section>
  );
}
