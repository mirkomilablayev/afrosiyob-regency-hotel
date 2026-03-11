'use client';

import { Phone, MessageCircle, CalendarCheck } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export default function MobileStickyBar() {
    const { t } = useLanguage();

    return (
        <div className="fixed bottom-0 left-0 right-0 md:hidden bg-cardBg/90 backdrop-blur-xl border-t border-white/10 z-50 pb-safe shadow-[0_-10px_30px_rgba(0,0,0,0.5)]">
            <div className="flex justify-between items-center px-4 py-4">

                <a
                    href="tel:+998555190005"
                    className="flex-1 flex flex-col items-center justify-center text-slate-300 hover:text-goldPrimary transition-colors group"
                >
                    <Phone className="w-5 h-5 mb-1 group-hover:scale-110 transition-transform" />
                    <span className="text-[10px] uppercase font-medium tracking-widest opacity-80">{t.mobileBar.call}</span>
                </a>

                <div className="w-px h-8 bg-white/10" />

                <a
                    href="https://wa.me/998555190005"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex flex-col items-center justify-center text-slate-300 hover:text-[#25D366] transition-colors group"
                >
                    <MessageCircle className="w-5 h-5 mb-1 group-hover:scale-110 transition-transform" />
                    <span className="text-[10px] uppercase font-medium tracking-widest opacity-80">{t.mobileBar.whatsapp}</span>
                </a>

                <div className="w-px h-8 bg-white/10" />

                <Link
                    href="#booking"
                    className="flex-1 flex flex-col items-center justify-center text-goldPrimary hover:text-white transition-colors group"
                >
                    <CalendarCheck className="w-5 h-5 mb-1 group-hover:scale-110 transition-transform text-goldPrimary drop-shadow-[0_0_10px_rgba(212,175,55,0.4)]" />
                    <span className="text-[10px] uppercase font-bold tracking-widest">{t.mobileBar.book}</span>
                </Link>

            </div>
        </div>
    );
}
