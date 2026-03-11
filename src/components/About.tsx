'use client';

import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

export default function About() {
    const { t } = useLanguage();

    return (
        <section id="about" className="py-12 md:py-32 bg-background relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">

                    <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:max-w-none rounded-sm overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] group reveal opacity-0">
                        <Image
                            src="/images/gallery_1.png"
                            alt="Afrosiyob Regency Hotel Lobby"
                            fill
                            className="object-cover transition-transform duration-1000 group-hover:scale-110"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 border border-white/10 rounded-sm z-10 pointer-events-none" />
                    </div>

                    <div className="flex flex-col justify-center text-center lg:text-left reveal opacity-0" style={{ animationDelay: '0.2s' }}>
                        <h3 className="text-goldPrimary font-semibold tracking-[0.2em] uppercase text-sm mb-6">
                            {t.about.tag}
                        </h3>
                        <h2 className="text-4xl md:text-6xl font-serif text-white font-bold mb-10 leading-[1.1]">
                            {t.about.title}
                        </h2>

                        <p className="text-slate-400 text-lg md:text-xl leading-relaxed mb-8 font-light">
                            {t.about.desc1}
                        </p>

                        <p className="text-slate-400 text-lg md:text-xl leading-relaxed mb-12 font-light">
                            {t.about.desc2}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-12 justify-center lg:justify-start">
                            <div className="flex flex-col items-center lg:items-start group">
                                <span className="text-5xl text-goldPrimary font-serif font-bold mb-3 drop-shadow-[0_0_10px_rgba(212,175,55,0.4)]">5★</span>
                                <span className="text-xs text-slate-500 uppercase tracking-widest">{t.about.stats.luxury}</span>
                            </div>
                            <div className="w-px bg-white/10 hidden sm:block" />
                            <div className="flex flex-col items-center lg:items-start group">
                                <span className="text-5xl text-goldPrimary font-serif font-bold mb-3 drop-shadow-[0_0_10px_rgba(212,175,55,0.4)]">24/7</span>
                                <span className="text-xs text-slate-500 uppercase tracking-widest">{t.about.stats.reception}</span>
                            </div>
                            <div className="w-px bg-white/10 hidden sm:block" />
                            <div className="flex flex-col items-center lg:items-start group">
                                <span className="text-5xl text-goldPrimary font-serif font-bold mb-3 drop-shadow-[0_0_10px_rgba(212,175,55,0.4)]">100+</span>
                                <span className="text-xs text-slate-500 uppercase tracking-widest">{t.about.stats.rooms}</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
