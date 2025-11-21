import type { ReactNode } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

type NeonButtonProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  external?: boolean;
};

export function NeonButton({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className,
  disabled = false,
  type = 'button',
  external = false,
}: NeonButtonProps) {
  const baseClasses
    = 'inline-flex items-center justify-center font-semibold rounded-pill transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-aqua focus:ring-offset-2 focus:ring-offset-navyBlack disabled:opacity-50 disabled:cursor-not-allowed';

  const variantClasses = {
    primary:
      'bg-button-primary text-navy-black shadow-glow-aqua hover:shadow-glow-pink hover:scale-105 active:scale-95',
    secondary:
      'bg-button-secondary text-white border border-aqua/30 hover:bg-aqua/20 hover:border-aqua/50',
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const classes = cn(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    className,
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {children}
    </button>
  );
}
