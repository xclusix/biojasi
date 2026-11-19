import React from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'sand' | 'forest' | 'amber' | 'clay' | 'outline' | 'charcoal';
}

export const Badge: React.FC<BadgeProps> = ({
  className,
  variant = 'sand',
  children,
  ...props
}) => {
  const variants = {
    sand: 'bg-sand-100 text-charcoal-700 border-sand-300',
    forest: 'bg-botanical-forest/10 text-botanical-forest border-botanical-forest/20',
    amber: 'bg-botanical-amber/15 text-botanical-amber border-botanical-amber/30',
    clay: 'bg-botanical-clay/10 text-botanical-clay border-botanical-clay/20',
    outline: 'bg-transparent text-charcoal-700 border-sand-300',
    charcoal: 'bg-charcoal-800 text-sand-50 border-charcoal-800',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-sub uppercase font-bold tracking-[0.2em] border transition-colors',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};
