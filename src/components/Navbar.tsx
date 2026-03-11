'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Phone, CheckCircle, ChevronDown } from 'lucide-react';
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

                    <div className="relative group">
                        <button className="flex items-center space-x-1 text-sm font-medium text-white hover:text-goldPrimary transition-colors">
                            <span className="uppercase">{language}</span>
                            <ChevronDown className="w-4 h-4" />
                        </button>
                        <div className="absolute right-0 top-full mt-2 w-20 bg-cardBg border border-white/10 rounded shadow-2xl py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                            <button onClick={() => setLanguage('uz')} className="block w-full text-center px-4 py-2 text-sm text-textPrimary hover:bg-white/5 uppercase font-medium">UZ</button>
                            <button onClick={() => setLanguage('en')} className="block w-full text-center px-4 py-2 text-sm text-textPrimary hover:bg-white/5 uppercase font-medium">EN</button>
                            <button onClick={() => setLanguage('ru')} className="block w-full text-center px-4 py-2 text-sm text-textPrimary hover:bg-white/5 uppercase font-medium">RU</button>
                        </div>
                    </div>

                    <a
                        href="tel:+998555190005"
                        className="flex items-center space-x-2 px-5 py-2.5 rounded text-sm font-medium transition-all text-white hover:text-goldPrimary"
                    >
                        <Phone className="w-4 h-4" />
                        <span className="hidden sm:inline">{t.navbar.callHotel}</span>
                    </a>
                    <Link
                        href="#booking"
                        className="flex items-center space-x-2 px-6 py-2.5 bg-gradient-to-r from-goldPrimary to-goldButton text-white rounded text-sm font-semibold tracking-wider uppercase shadow-[0_0_15px_rgba(212,175,55,0.3)] hover:shadow-[0_0_25px_rgba(212,175,55,0.5)] transition-all transform hover:-translate-y-0.5"
                    >
                        <CheckCircle className="w-4 h-4" />
                        <span>{t.navbar.bookDirect}</span>
                    </Link>
                </div>
            </div>
        </nav>
    );
}
