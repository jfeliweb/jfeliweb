import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

type NeonGlowPanelProps = {
  children: ReactNode;
  className?: string;
  glowColor?: 'pink' | 'aqua';
};

export function NeonGlowPanel({ children, className, glowColor = 'aqua' }: NeonGlowPanelProps) {
  return (
    <div
      className={cn(
        'bg-card-gradient backdrop-blur-surface rounded-lg border border-white/6 p-6',
        glowColor === 'aqua' ? 'hover:shadow-glow-aqua' : 'hover:shadow-glow-pink',
        'transition-all duration-300',
        className,
      )}
    >
      {children}
    </div>
  );
}
