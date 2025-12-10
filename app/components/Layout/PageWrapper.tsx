import React from 'react';
import { Navbar } from '../Navigation/Navbar';

interface PageWrapperProps {
    children: React.ReactNode;
    className?: string;
    backgroundEffect?: React.ReactNode;
}

export function PageWrapper({ children, className = "", backgroundEffect }: PageWrapperProps) {
    return (
        <div className="min-h-screen bg-[#05000a] text-white pt-24 pb-12 relative overflow-hidden">
            {/* Background Effect Layer */}
            {backgroundEffect && (
                <div className="absolute inset-0 z-0">
                    {backgroundEffect}
                </div>
            )}

            <div className="fixed inset-0 bg-[url('/noise.png')] opacity-[0.03] pointer-events-none z-50 mix-blend-overlay"></div>

            <Navbar />

            <main className={`max-w-[1200px] mx-auto px-6 relative z-10 ${className}`}>
                {children}
            </main>
        </div>
    );
}
