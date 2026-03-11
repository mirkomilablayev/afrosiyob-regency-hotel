'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Phone, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const { language, setLanguage, t } = useLanguage();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-background/90 backdrop-blur-xl shadow-2xl border-b border-white/5' : 'bg-transparent'}`}>

            {/* ── MOBILE layout (< md): two rows ── */}
            <div className="md:hidden px-4 pt-3 pb-2 flex flex-col gap-2">
                <div className="flex items-center justify-between">
                    {/* Brand */}
                    <Link href="/" className="text-xl font-serif font-bold text-white tracking-wide">
                        {t.navbar.brand}
                    </Link>
                    {/* Actions */}
                    <div className="flex items-center gap-2">
                        <a href="tel:+998555190005" className="text-white hover:text-goldPrimary transition-colors p-1">
                            <Phone className="w-5 h-5" />
                        </a>
                        <Link
                            href="#booking"
                            className="flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-goldPrimary to-goldButton text-white rounded text-xs font-bold tracking-wider uppercase shadow-[0_0_12px_rgba(212,175,55,0.3)] whitespace-nowrap"
                        >
                            <CheckCircle className="w-3.5 h-3.5 shrink-0" />
                            {t.navbar.bookDirect}
                        </Link>
                    </div>
                </div>
                {/* Language pills — second row */}
                <div className="flex items-center gap-1">
                    {(['ru', 'en', 'uz'] as const).map((lang) => (
                        <button
                            key={lang}
                            onClick={() => setLanguage(lang)}
                            className={`flex-1 py-1 rounded-full text-[10px] font-semibold uppercase tracking-widest transition-all duration-300 text-center border ${language === lang
                                    ? 'bg-gradient-to-r from-goldPrimary to-goldButton text-white border-transparent shadow-[0_0_8px_rgba(212,175,55,0.4)]'
                                    : 'text-slate-400 border-white/10 hover:text-white'
                                }`}
                        >
                            {lang}
                        </button>
                    ))}
                </div>
            </div>

            {/* ── DESKTOP layout (≥ md): single row ── */}
            <div className="hidden md:flex max-w-7xl mx-auto px-6 lg:px-8 items-center justify-between py-6">
                <Link href="/" className="text-2xl font-serif font-bold text-white tracking-wide">
                    {t.navbar.brand}
                </Link>
                <div className="flex items-center gap-4">
                    {/* Language pill */}
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
                        className="flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white hover:text-goldPrimary transition-colors"
                    >
                        <Phone className="w-4 h-4 shrink-0" />
                        <span>{t.navbar.callHotel}</span>
                    </a>
                    <Link
                        href="#booking"
                        className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-goldPrimary to-goldButton text-white rounded text-sm font-semibold tracking-wider uppercase shadow-[0_0_15px_rgba(212,175,55,0.3)] hover:shadow-[0_0_25px_rgba(212,175,55,0.5)] transition-all hover:-translate-y-0.5 whitespace-nowrap"
                    >
                        <CheckCircle className="w-4 h-4 shrink-0" />
                        {t.navbar.bookDirect}
                    </Link>
                </div>
            </div>

        </nav>
    );
}
