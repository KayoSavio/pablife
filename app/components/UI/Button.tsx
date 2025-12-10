import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  glow?: boolean;
}

import useSound from 'use-sound';

// Note: You need to add sound files to /public/sounds/
// or use a base64 string. 

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', glow = false, children, ...props }, ref) => {

    // Placeholder for sound effect. Uncomment when you have a file.
    // const [playHover] = useSound('/sounds/hover.mp3', { volume: 0.5 });
    // const [playClick] = useSound('/sounds/click.mp3', { volume: 0.5 });

    const baseStyles = 'relative group inline-flex items-center justify-center font-mono font-bold uppercase tracking-widest transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none overflow-hidden';

    const variants = {
      primary: 'bg-transparent text-white border border-white/20 hover:border-pink-500',
      secondary: 'bg-pink-600 text-white border border-pink-600 hover:bg-pink-700',
      outline: 'bg-transparent text-cyan-400 border border-cyan-400/50 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(0,255,255,0.3)]',
      ghost: 'bg-transparent text-white/70 hover:text-white hover:bg-white/10',
    };

    const sizes = {
      sm: 'text-[10px] px-4 py-2',
      md: 'text-xs md:text-sm px-8 py-4',
      lg: 'text-sm md:text-base px-10 py-5',
    };

    const glowEffect = glow ? 'shadow-[0_0_20px_rgba(255,51,149,0.3)] hover:shadow-[0_0_40px_rgba(255,51,149,0.6)]' : '';

    return (
      <button
        ref={ref}
        className={twMerge(clsx(baseStyles, variants[variant], sizes[size], glowEffect, className))}
        onMouseEnter={() => {
          // playHover();
        }}
        onClick={(e) => {
          // playClick();
          props.onClick?.(e);
        }}
        {...props}
      >
        {variant === 'primary' && (
          <div className="absolute inset-0 w-0 bg-pink-600 transition-all duration-[250ms] ease-out group-hover:w-full opacity-20" />
        )}

        <span className="relative z-10 flex items-center gap-2">
          {variant === 'primary' && <span className="text-pink-600 group-hover:text-white transition-colors">[</span>}
          {children}
          {variant === 'primary' && <span className="text-pink-600 group-hover:text-white transition-colors">]</span>}
        </span>
      </button>
    );
  }
);

Button.displayName = 'Button';
