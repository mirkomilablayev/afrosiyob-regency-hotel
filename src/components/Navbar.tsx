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
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-background/80 backdrop-blur-xl shadow-2xl py-3 border-b border-white/5' : 'bg-transparent py-5'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                <Link href="/" className="text-lg sm:text-2xl font-serif font-bold text-white tracking-wide whitespace-nowrap">
                    {t.navbar.brand}
                </Link>
                <div className="flex items-center gap-2 sm:gap-4">

                    {/* Language pill switcher */}
                    <div className="flex items-center bg-white/5 border border-white/10 rounded-full p-0.5 backdrop-blur-sm">
                        {(['ru', 'en', 'uz'] as const).map((lang) => (
                            <button
                                key={lang}
                                onClick={() => setLanguage(lang)}
                                className={`w-8 sm:w-9 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-semibold uppercase tracking-widest transition-all duration-300 text-center ${language === lang
                                    ? 'bg-gradient-to-r from-goldPrimary to-goldButton text-white shadow-[0_0_10px_rgba(212,175,55,0.4)]'
                                    : 'text-slate-400 hover:text-white'
                                    }`}
                            >
                                {lang}
                            </button>
                        ))}
                    </div>

                    {/* Call — icon only on mobile */}
                    <a
                        href="tel:+998555190005"
                        className="flex items-center justify-center text-white hover:text-goldPrimary transition-colors p-1"
                    >
                        <Phone className="w-5 h-5 shrink-0" />
                    </a>

                    {/* Book button — icon + short text on mobile */}
                    <Link
                        href="#booking"
                        className="flex items-center justify-center gap-1.5 px-3 sm:px-6 py-2 sm:py-2.5 bg-gradient-to-r from-goldPrimary to-goldButton text-white rounded text-xs sm:text-sm font-semibold tracking-wider uppercase shadow-[0_0_15px_rgba(212,175,55,0.3)] hover:shadow-[0_0_25px_rgba(212,175,55,0.5)] transition-all whitespace-nowrap"
                    >
                        <CheckCircle className="w-4 h-4 shrink-0" />
                        <span className="hidden xs:inline sm:inline">{t.navbar.bookDirect}</span>
                    </Link>
                </div>
            </div>
        </nav>
    );
}
