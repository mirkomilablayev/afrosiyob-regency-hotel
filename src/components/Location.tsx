'use client';

import { Phone, MapPin, Send, MessageCircle, Instagram } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Location() {
    const { t } = useLanguage();

    return (
        <section id="location" className="py-32 bg-secondaryBg relative border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                {/* Section header */}
                <div className="text-center mb-20 reveal opacity-0">
                    <span className="text-goldPrimary font-semibold tracking-[0.2em] uppercase text-sm mb-6 block">
                        {t.location.tag}
                    </span>
                    <h2 className="text-4xl md:text-6xl font-serif text-white font-bold mb-6">
                        {t.location.title}
                    </h2>
                    <div className="w-20 h-px bg-goldPrimary mx-auto" />
                </div>

                {/* Two-column: info left, map right */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-white/5 shadow-[0_30px_60px_rgba(0,0,0,0.5)] reveal opacity-0" style={{ animationDelay: '0.2s' }}>

                    {/* Left — contact info */}
                    <div className="bg-cardBg p-12 lg:p-16 flex flex-col justify-center space-y-10 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-64 h-64 bg-goldPrimary/5 blur-[100px] rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

                        <div className="relative z-10">
                            <h3 className="text-3xl font-serif font-bold text-white mb-10 tracking-wide">
                                {t.contact.tag}
                            </h3>

                            {/* Phone */}
                            <div className="flex items-start mb-8 group">
                                <div className="p-3 bg-background/50 border border-white/5 group-hover:border-goldPrimary/40 rounded-lg transition-all shrink-0 mr-5">
                                    <Phone className="w-5 h-5 text-goldPrimary" strokeWidth={1.5} />
                                </div>
                                <div>
                                    <p className="text-xs text-goldPrimary uppercase tracking-widest mb-2">{t.contact.phone}</p>
                                    <a href="tel:+998555190005" className="text-white text-lg font-light tracking-wider hover:text-goldPrimary transition-colors block">
                                        +998 55 519 00 05
                                    </a>
                                </div>
                            </div>

                            {/* Address */}
                            <div className="flex items-start mb-12 group">
                                <div className="p-3 bg-background/50 border border-white/5 group-hover:border-goldPrimary/40 rounded-lg transition-all shrink-0 mr-5">
                                    <MapPin className="w-5 h-5 text-goldPrimary" strokeWidth={1.5} />
                                </div>
                                <div>
                                    <p className="text-xs text-goldPrimary uppercase tracking-widest mb-2">{t.contact.address}</p>
                                    <p className="text-white font-light text-lg leading-relaxed">
                                        {t.contact.addressText}
                                    </p>
                                </div>
                            </div>

                            {/* Social icons */}
                            <div className="flex items-center space-x-4">
                                <a
                                    href="tel:+998555190005"
                                    className="p-3 bg-background/50 border border-white/10 hover:border-goldPrimary hover:bg-goldPrimary/10 rounded-lg transition-all group"
                                    title="Call"
                                >
                                    <Phone className="w-5 h-5 text-slate-400 group-hover:text-goldPrimary transition-colors" strokeWidth={1.5} />
                                </a>
                                <a
                                    href="https://t.me/mirkomil_ablayev"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-background/50 border border-white/10 hover:border-[#2AABEE] hover:bg-[#2AABEE]/10 rounded-lg transition-all group"
                                    title="Telegram"
                                >
                                    <Send className="w-5 h-5 text-slate-400 group-hover:text-[#2AABEE] transition-colors" strokeWidth={1.5} />
                                </a>
                                <a
                                    href="https://wa.me/998555190005"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-background/50 border border-white/10 hover:border-[#25D366] hover:bg-[#25D366]/10 rounded-lg transition-all group"
                                    title="WhatsApp"
                                >
                                    <MessageCircle className="w-5 h-5 text-slate-400 group-hover:text-[#25D366] transition-colors" strokeWidth={1.5} />
                                </a>
                                <a
                                    href="https://www.instagram.com/afrosiyob.hotel/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-background/50 border border-white/10 hover:border-pink-500 hover:bg-pink-500/10 rounded-lg transition-all group"
                                    title="Instagram"
                                >
                                    <Instagram className="w-5 h-5 text-slate-400 group-hover:text-pink-400 transition-colors" strokeWidth={1.5} />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right — map */}
                    <div className="relative h-[450px] lg:h-auto min-h-[450px]">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.!2d69.2621501!3d41.271237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8aa211cf252d:0x2116290f74502dfd!2sAfrosiyob+Regency+Hotel!5e0!3m2!1sen!2suz!4v1"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="absolute inset-0 w-full h-full grayscale hover:grayscale-0 transition-all duration-1000"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
}
