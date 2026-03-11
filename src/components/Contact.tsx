'use client';

import { Phone, MapPin, MessageCircle, Send } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Contact() {
    const { t } = useLanguage();

    return (
        <section id="contact" className="py-12 md:py-32 bg-background relative border-t border-white/5 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32">

                    <div className="flex justify-center flex-col reveal opacity-0">
                        <span className="text-goldPrimary font-semibold tracking-[0.2em] uppercase text-sm mb-6 block">
                            {t.contact.tag}
                        </span>
                        <h2 className="text-4xl md:text-6xl font-serif text-white font-bold mb-10 leading-tight">
                            {t.contact.title}
                        </h2>
                        <p className="text-slate-400 font-light text-xl mb-16 leading-relaxed">
                            {t.contact.desc}
                        </p>

                        <div className="space-y-12">
                            <div className="flex items-start group">
                                <div className="p-5 bg-cardBg border border-white/5 group-hover:border-goldPrimary/50 rounded-xl transition-all shrink-0 shadow-lg">
                                    <MapPin className="text-goldPrimary w-7 h-7" strokeWidth={1.5} />
                                </div>
                                <div className="ml-8">
                                    <h4 className="text-white font-bold text-xl mb-3 font-serif tracking-wide">{t.contact.address}</h4>
                                    <p className="text-slate-400 font-light text-lg leading-relaxed mix-blend-plus-lighter">
                                        {t.contact.addressText}
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start group">
                                <div className="p-5 bg-cardBg border border-white/5 group-hover:border-goldPrimary/50 rounded-xl transition-all shrink-0 shadow-lg">
                                    <Phone className="text-goldPrimary w-7 h-7" strokeWidth={1.5} />
                                </div>
                                <div className="ml-8">
                                    <h4 className="text-white font-bold text-xl mb-3 font-serif tracking-wide">{t.contact.phone}</h4>
                                    <a href="tel:+998555190005" className="text-slate-400 font-light text-lg tracking-wider leading-relaxed hover:text-goldPrimary transition-colors block mb-2">
                                        +998 55 519 00 05
                                    </a>
                                    <span className="text-xs text-goldPrimary/80 uppercase tracking-widest border border-goldPrimary/20 px-3 py-1 rounded inline-block">{t.contact.available}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-cardBg border border-white/5 rounded-2xl p-12 lg:p-16 shadow-[0_30px_60px_rgba(0,0,0,0.6)] relative overflow-hidden reveal opacity-0" style={{ animationDelay: '0.2s' }}>
                        <div className="absolute top-0 right-0 w-64 h-64 bg-goldPrimary/10 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />

                        <div className="relative z-10 text-white">
                            <h3 className="text-3xl font-serif font-bold mb-6">
                                {t.contact.fastBooking}
                            </h3>
                            <div className="w-16 h-px bg-goldPrimary mb-8"></div>
                            <p className="text-slate-400 font-light text-lg mb-12 leading-relaxed">
                                {t.contact.fastBookingDesc}
                            </p>

                            <div className="space-y-6">
                                <a
                                    href="tel:+998555190005"
                                    className="flex font-medium tracking-widest uppercase text-sm items-center justify-center w-full py-5 px-6 bg-white/5 border border-white/10 hover:border-goldPrimary text-white rounded hover:bg-white/10 transition-all duration-300 group"
                                >
                                    <Phone className="w-5 h-5 mr-4 text-goldPrimary group-hover:scale-110 transition-transform" />
                                    {t.contact.callNow}
                                </a>

                                <a
                                    href="https://wa.me/998555190005"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex font-medium tracking-widest uppercase text-sm items-center justify-center w-full py-5 px-6 bg-[#25D366]/10 border border-[#25D366]/20 hover:border-[#25D366] text-white rounded transition-all duration-300 hover:shadow-[0_0_20px_rgba(37,211,102,0.2)] group"
                                >
                                    <MessageCircle className="w-5 h-5 mr-4 text-[#25D366] group-hover:scale-110 transition-transform" />
                                    {t.contact.whatsapp}
                                </a>

                                <a
                                    href="https://t.me/afrosiyob_regency"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex font-medium tracking-widest uppercase text-sm items-center justify-center w-full py-5 px-6 bg-[#2AABEE]/10 border border-[#2AABEE]/20 hover:border-[#2AABEE] text-white rounded transition-all duration-300 hover:shadow-[0_0_20px_rgba(42,171,238,0.2)] group"
                                >
                                    <Send className="w-5 h-5 mr-4 text-[#2AABEE] group-hover:scale-110 transition-transform" />
                                    {t.contact.telegram}
                                </a>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}
