'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function Location() {
    const { t } = useLanguage();

    return (
        <section id="location" className="py-32 bg-secondaryBg relative">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-24 max-w-3xl mx-auto reveal opacity-0">
                    <span className="text-goldPrimary font-semibold tracking-[0.2em] uppercase text-sm mb-6 block">
                        {t.location.tag}
                    </span>
                    <h2 className="text-4xl md:text-6xl font-serif text-white font-bold mb-8">
                        {t.location.title}
                    </h2>
                    <div className="w-20 h-px bg-goldPrimary mx-auto mb-8"></div>
                    <p className="text-slate-400 font-light text-xl">
                        {t.location.desc}
                    </p>
                </div>

                <div className="relative w-full h-[600px] rounded-xl overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.5)] border border-white/5 reveal opacity-0" style={{ animationDelay: '0.2s' }}>
                    <div className="absolute inset-0 pointer-events-none z-10 shadow-[inset_0_0_50px_rgba(11,19,32,0.5)]" />
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.!2d69.2621501!3d41.271237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8aa211cf252d:0x2116290f74502dfd!2sAfrosiyob+Regency+Hotel!5e0!3m2!1sen!2suz!4v1"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="absolute inset-0 grayscale contrast-125 hover:grayscale-0 hover:contrast-100 transition-all duration-1000"
                    />
                </div>
            </div>
        </section>
    );
}
