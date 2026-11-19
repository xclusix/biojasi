import React from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'glass';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      fullWidth = false,
      isLoading = false,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center font-sub uppercase font-semibold transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-charcoal-700/20 disabled:opacity-50 disabled:cursor-not-allowed select-none active:scale-[0.98]';

    const variants = {
      primary:
        'bg-charcoal-800 text-sand-50 hover:bg-charcoal-900 shadow-antigravity hover:shadow-antigravity-lg hover:-translate-y-0.5',
      secondary:
        'bg-sand-100 text-charcoal-800 hover:bg-sand-200 border border-sand-300 shadow-sm hover:-translate-y-0.5',
      outline:
        'border border-charcoal-800 text-charcoal-800 bg-transparent hover:bg-charcoal-800 hover:text-sand-50 hover:-translate-y-0.5',
      ghost:
        'text-charcoal-700 hover:text-charcoal-900 hover:bg-sand-100/60 bg-transparent',
      glass:
        'glass-luxury text-charcoal-800 hover:bg-white border border-sand-300/80 shadow-antigravity-sm hover:-translate-y-0.5',
    };

    const sizes = {
      sm: 'px-4 py-2 text-[10px] tracking-[0.2em]',
      md: 'px-7 py-3.5 text-xs tracking-[0.18em]',
      lg: 'px-9 py-4 text-xs tracking-[0.22em]',
    };

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          fullWidth && 'w-full',
          className
        )}
        {...props}
      >
        {isLoading ? (
          <span className="inline-flex items-center gap-2">
            <svg
              className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            <span>Preparando...</span>
          </span>
        ) : (
          children
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';
