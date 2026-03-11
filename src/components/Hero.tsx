'use client';

import Image from 'next/image';
import Link from 'next/link';
import Navbar from './Navbar';
import { useLanguage } from '@/context/LanguageContext';

export default function Hero() {
    const { t } = useLanguage();

    return (
        <section id="home" className="relative w-full h-[100vh] min-h-[700px] flex items-center justify-center overflow-hidden">
            <Navbar />

            {/* Background Image */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <Image
                    src="/images/hero_hotel.png"
                    alt="Afrosiyob Regency Hotel"
                    fill
                    priority
                    className="object-cover animate-zoom-slow"
                    sizes="100vw"
                />
                {/* Dark overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-black/40" />
            </div>

            {/* Hero Content */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 max-w-5xl mx-auto mt-20">
                <span className="text-goldPrimary uppercase tracking-[0.4em] text-sm font-semibold mb-6 animate-fade-in-up">
                    {t.hero.welcome}
                </span>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white font-bold mb-8 drop-shadow-2xl leading-tight animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                    {t.hero.title}
                </h1>
                <p className="text-lg md:text-2xl text-slate-300 mb-12 max-w-2xl font-light drop-shadow-md animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    {t.hero.subtitle}
                </p>

                <div className="flex flex-col sm:flex-row gap-6 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                    <Link
                        href="#booking"
                        className="px-10 py-4 bg-gradient-to-r from-goldPrimary to-goldButton hover:from-goldButton hover:to-goldPrimary text-white font-medium tracking-wide rounded transition-all duration-300 transform hover:-translate-y-1 shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] flex items-center justify-center uppercase text-sm"
                    >
                        {t.hero.bookStay}
                    </Link>
                    <a
                        href="tel:+998555190005"
                        className="px-10 py-4 bg-white/5 hover:bg-white/10 backdrop-blur-md text-white border border-white/20 hover:border-goldPrimary font-medium tracking-wide rounded transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center uppercase text-sm"
                    >
                        {t.hero.callHotel}
                    </a>
                </div>
            </div>
        </section>
    );
}
