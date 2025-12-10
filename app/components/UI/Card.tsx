import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    hoverEffect?: boolean;
}

export function Card({ children, className, hoverEffect = true }: CardProps) {
    return (
        <div
            className={twMerge(
                clsx(
                    'relative bg-white/[0.03] backdrop-blur-md border border-white/10 p-6 md:p-8 rounded-2xl transition-all duration-500',
                    hoverEffect && 'hover:-translate-y-2 hover:border-pink-500/50 hover:shadow-[0_10px_40px_-10px_rgba(255,51,149,0.3)] hover:bg-white/[0.05]',
                    className
                )
            )}
        >
            {children}
        </div>
    );
}
