import { cn } from '@/lib/utils';

type NeonHeadingProps = {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children: React.ReactNode;
  className?: string;
  withUnderline?: boolean;
  size?: 'h1' | 'h2' | 'h3' | 'h4';
};

export function NeonHeading({
  as: Component = 'h2',
  children,
  className,
  withUnderline = false,
  size = 'h2',
}: NeonHeadingProps) {
  const sizeClasses = {
    h1: 'text-4xl md:text-5xl lg:text-6xl',
    h2: 'text-3xl md:text-4xl lg:text-5xl',
    h3: 'text-2xl md:text-3xl',
    h4: 'text-xl md:text-2xl',
  };

  return (
    <Component
      className={cn(
        'font-heading font-bold text-white',
        sizeClasses[size],
        withUnderline && 'neon-underline',
        className,
      )}
    >
      {children}
    </Component>
  );
}
