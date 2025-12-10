'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { clsx } from 'clsx';
import { Button } from '../UI/Button';

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    const navItems = [
        { label: 'Quem Somos', href: '/sobre' },
        { label: 'Mentorias', href: '/mentorias' },
        { label: 'Profissionais', href: '/profissionais' },
        { label: 'Contato', href: '/contato' },
    ];

    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-50 px-6 py-6 border-b border-white/5 bg-[#05000a]/30 backdrop-blur-md">
                <div className="max-w-[1800px] mx-auto flex justify-between items-center">
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="w-8 h-8 relative">
                            <img src="/logo.png" alt="Pablife" className="object-contain group-hover:sepia transition-all" />
                        </div>
                        <span className="font-black text-lg tracking-[0.2em] text-white group-hover:text-pink-500 transition-colors">PABLIFE</span>
                    </Link>

                    <nav className="hidden md:flex gap-8 text-xs font-bold uppercase tracking-[0.2em] text-white/60">
                        {navItems.map((item, i) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={clsx(
                                    "hover:text-white transition-colors relative group py-2",
                                    pathname === item.href && "text-white"
                                )}
                                onMouseEnter={() => {
                                    // playHover();
                                }}
                            >
                                <span className="text-pink-500 mr-1 opacity-50 group-hover:opacity-100">0{i + 1}.</span>
                                {item.label}
                                {pathname === item.href && (
                                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-pink-500 animate-slide-in" />
                                )}
                            </Link>
                        ))}
                    </nav>

                    <div className="flex items-center gap-4">
                        <button className="md:hidden text-2xl p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            {isMenuOpen ? '✕' : '☰'}
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="fixed inset-0 z-40 bg-[#05000a] flex flex-col pt-32 px-6 gap-8">
                    {navItems.map((item, i) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setIsMenuOpen(false)}
                            className="text-4xl font-black uppercase tracking-tighter text-white/80 hover:text-pink-500 transition-colors border-b border-white/10 pb-4"
                        >
                            <span className="text-sm font-mono text-pink-500 block mb-2">0{i + 1}.</span>
                            {item.label}
                        </Link>
                    ))}
                </div>
            )}
        </>
    );
}
