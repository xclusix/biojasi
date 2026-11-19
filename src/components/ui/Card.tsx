import React from 'react';
import { cn } from '@/lib/utils';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'flat' | 'glass' | 'sand' | 'interactive';
}

export const Card: React.FC<CardProps> = ({
  className,
  variant = 'glass',
  children,
  ...props
}) => {
  const variants = {
    flat: 'bg-white border border-sand-200 shadow-sm rounded-3xl',
    glass: 'glass-luxury-card rounded-3xl',
    sand: 'bg-sand-100/90 border border-sand-300/80 rounded-3xl shadow-antigravity-sm',
    interactive:
      'glass-luxury-card rounded-3xl cursor-pointer hover:shadow-antigravity-float hover:-translate-y-1 transition-all duration-300',
  };

  return (
    <div className={cn(variants[variant], 'overflow-hidden', className)} {...props}>
      {children}
    </div>
  );
};
