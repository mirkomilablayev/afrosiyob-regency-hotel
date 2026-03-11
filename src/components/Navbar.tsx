'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Phone, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const { language, setLanguage, t } = useLanguage();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-background/80 backdrop-blur-xl shadow-2xl py-4 border-b border-white/5' : 'bg-transparent py-8'}`}>
            <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center">
                <Link href="/" className="text-2xl font-serif font-bold text-white tracking-wide">
                    {t.navbar.brand}
                </Link>
                <div className="flex space-x-4 items-center">

                    {/* Premium language pill switcher — fixed-width cells to prevent layout shift */}
                    <div className="flex items-center bg-white/5 border border-white/10 rounded-full p-0.5 backdrop-blur-sm">
                        {(['ru', 'en', 'uz'] as const).map((lang) => (
                            <button
                                key={lang}
                                onClick={() => setLanguage(lang)}
                                className={`w-9 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest transition-all duration-300 text-center ${language === lang
                                    ? 'bg-gradient-to-r from-goldPrimary to-goldButton text-white shadow-[0_0_10px_rgba(212,175,55,0.4)]'
                                    : 'text-slate-400 hover:text-white'
                                    }`}
                            >
                                {lang}
                            </button>
                        ))}
                    </div>

                    <a
                        href="tel:+998555190005"
                        className="flex items-center justify-center whitespace-nowrap space-x-2 min-w-[40px] sm:min-w-[110px] px-5 py-2.5 rounded text-sm font-medium transition-all text-white hover:text-goldPrimary"
                    >
                        <Phone className="w-4 h-4 shrink-0" />
                        <span className="hidden sm:inline">{t.navbar.callHotel}</span>
                    </a>
                    <Link
                        href="#booking"
                        className="flex items-center justify-center whitespace-nowrap space-x-2 min-w-[120px] px-6 py-2.5 bg-gradient-to-r from-goldPrimary to-goldButton text-white rounded text-sm font-semibold tracking-wider uppercase shadow-[0_0_15px_rgba(212,175,55,0.3)] hover:shadow-[0_0_25px_rgba(212,175,55,0.5)] transition-all transform hover:-translate-y-0.5"
                    >
                        <CheckCircle className="w-4 h-4 shrink-0" />
                        <span>{t.navbar.bookDirect}</span>
                    </Link>
                </div>
            </div>
        </nav>
    );
}
