import { cn } from '@/lib/utils';

type NeonDividerProps = {
  className?: string;
  variant?: 'horizontal' | 'vertical';
  glow?: 'pink' | 'aqua' | 'both';
};

export function NeonDivider({
  className,
  variant = 'horizontal',
  glow = 'both',
}: NeonDividerProps) {
  const glowClasses = {
    pink: 'border-neonPink/30 shadow-glow-pink',
    aqua: 'border-aqua/30 shadow-glow-aqua',
    both: 'border-aqua/30 shadow-[0_0_10px_rgba(56,253,253,0.3),0_0_20px_rgba(252,63,217,0.2)]',
  };

  if (variant === 'vertical') {
    return (
      <div
        className={cn(
          'h-full w-px bg-linear-to-b from-aqua/50 via-neonPink/50 to-aqua/50',
          glowClasses[glow],
          className,
        )}
      />
    );
  }

  return (
    <div
      className={cn(
        'h-px w-full bg-[linear-gradient(to_right,transparent,rgba(56,253,253,0.5),rgba(252,63,217,0.5),transparent)]',
        glowClasses[glow],
        className,
      )}
    />
  );
}
