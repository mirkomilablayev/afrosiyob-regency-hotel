'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function FAQ() {
    const { t } = useLanguage();
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs = [
        { q: t.faq.q1, a: t.faq.a1 },
        { q: t.faq.q2, a: t.faq.a2 },
        { q: t.faq.q3, a: t.faq.a3 },
        { q: t.faq.q4, a: t.faq.a4 },
    ];

    return (
        <section id="faq" className="py-32 bg-background relative border-t border-white/5">
            <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-goldPrimary/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16 reveal opacity-0">
                    <span className="text-goldPrimary font-semibold tracking-[0.2em] uppercase text-sm mb-6 block">
                        {t.faq.tag}
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif text-white font-bold mb-8">
                        {t.faq.title}
                    </h2>
                    <div className="w-16 h-px bg-goldPrimary mx-auto"></div>
                </div>

                <div className="space-y-6 reveal opacity-0" style={{ animationDelay: '0.2s' }}>
                    {faqs.map((faq, idx) => (
                        <div
                            key={idx}
                            className={`bg-cardBg border rounded-xl overflow-hidden transition-all duration-500 ${openIndex === idx ? 'border-goldPrimary/50 shadow-[0_10px_30px_rgba(212,175,55,0.1)]' : 'border-white/5 hover:border-goldPrimary/30 hover:shadow-2xl'}`}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none"
                            >
                                <span className={`font-serif text-xl md:text-2xl tracking-wide pr-4 transition-colors duration-300 ${openIndex === idx ? 'text-goldPrimary' : 'text-white'}`}>
                                    {faq.q}
                                </span>
                                <ChevronDown
                                    className={`w-6 h-6 text-goldPrimary shrink-0 transition-transform duration-500 ${openIndex === idx ? 'rotate-180' : ''}`}
                                />
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${openIndex === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                            >
                                <div className="p-6 md:p-8 pt-0 text-slate-300 font-light text-lg leading-relaxed">
                                    {faq.a}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
