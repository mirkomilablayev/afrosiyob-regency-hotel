'use client';

import { Wifi, Car, Thermometer, Bed, Clock, Plane } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Highlights() {
    const { t } = useLanguage();

    const highlights = [
        { name: t.highlights.wifi, icon: Wifi },
        { name: t.highlights.parking, icon: Car },
        { name: t.highlights.sauna, icon: Thermometer },
        { name: t.highlights.rooms, icon: Bed },
        { name: t.highlights.reception, icon: Clock },
        { name: t.highlights.airport, icon: Plane },
    ];

    return (
        <section id="highlights" className="py-12 md:py-32 bg-secondaryBg relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20 reveal opacity-0">
                    <span className="text-goldPrimary font-semibold tracking-[0.2em] uppercase text-sm mb-4 block">
                        {t.highlights.tag}
                    </span>
                    <h2 className="text-4xl md:text-6xl font-serif text-white font-bold mb-6 tracking-tight">
                        {t.highlights.title}
                    </h2>
                    <div className="w-20 h-px bg-goldPrimary mx-auto mb-8"></div>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-6 gap-6 md:gap-8 text-center reveal opacity-0" style={{ animationDelay: '0.2s' }}>
                    {highlights.map((highlight, index) => {
                        const Icon = highlight.icon;
                        return (
                            <div
                                key={index}
                                className="flex flex-col items-center justify-center p-8 bg-cardBg border border-white/5 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:border-goldPrimary/30 transition-all duration-500 transform hover:-translate-y-2 group"
                            >
                                <div className="mb-6 flex items-center justify-center">
                                    <Icon className="w-8 h-8 text-goldPrimary group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_rgba(212,175,55,0.6)] transition-all duration-500" strokeWidth={1} />
                                </div>
                                <h3 className="text-slate-300 font-light tracking-wide text-sm group-hover:text-white transition-colors">
                                    {highlight.name}
                                </h3>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
