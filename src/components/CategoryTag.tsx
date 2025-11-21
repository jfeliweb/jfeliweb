import { cn } from '@/lib/utils';

type CategoryTagProps = {
  label: string;
  className?: string;
};

export function CategoryTag({ label, className }: CategoryTagProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-pill px-3 py-1 text-xs font-medium',
        'border border-white/10 bg-white/7 text-slate-light',
        className,
      )}
    >
      {label}
    </span>
  );
}
