import React from 'react';
import { cn } from '@/lib/utils';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = 'text', label, error, helperText, id, ...props }, ref) => {
    const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

    return (
      <div className="w-full space-y-1.5 text-left">
        {label && (
          <label
            htmlFor={inputId}
            className="block text-xs font-sub uppercase font-bold tracking-wider text-charcoal-700"
          >
            {label}
          </label>
        )}

        <input
          id={inputId}
          type={type}
          ref={ref}
          className={cn(
            'w-full px-4 py-3.5 rounded-2xl bg-white border border-sand-300 text-charcoal-800 placeholder:text-charcoal-400 focus:outline-none focus:ring-2 focus:ring-charcoal-800/20 focus:border-charcoal-800 transition-all font-body text-sm shadow-sm disabled:opacity-50 disabled:bg-sand-50',
            error && 'border-red-400 focus:ring-red-400/20 focus:border-red-500',
            className
          )}
          {...props}
        />

        {error && <p className="text-xs text-red-600 font-medium">{error}</p>}
        {helperText && !error && (
          <p className="text-xs text-charcoal-500 font-light">{helperText}</p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, helperText, id, rows = 4, ...props }, ref) => {
    const textareaId =
      id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

    return (
      <div className="w-full space-y-1.5 text-left">
        {label && (
          <label
            htmlFor={textareaId}
            className="block text-xs font-sub uppercase font-bold tracking-wider text-charcoal-700"
          >
            {label}
          </label>
        )}

        <textarea
          id={textareaId}
          rows={rows}
          ref={ref}
          className={cn(
            'w-full px-4 py-3.5 rounded-2xl bg-white border border-sand-300 text-charcoal-800 placeholder:text-charcoal-400 focus:outline-none focus:ring-2 focus:ring-charcoal-800/20 focus:border-charcoal-800 transition-all font-body text-sm shadow-sm disabled:opacity-50 disabled:bg-sand-50 resize-y',
            error && 'border-red-400 focus:ring-red-400/20 focus:border-red-500',
            className
          )}
          {...props}
        />

        {error && <p className="text-xs text-red-600 font-medium">{error}</p>}
        {helperText && !error && (
          <p className="text-xs text-charcoal-500 font-light">{helperText}</p>
        )}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';
