'use client';

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
    const { t } = useLanguage();

    return (
        <footer className="bg-secondaryBg text-slate-300 pt-10 pb-6 md:py-24 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-5 lg:px-8">

                {/* ── Brand row (full width on all screens) ── */}
                <div className="mb-6 md:mb-16">
                    <h2 className="text-2xl md:text-4xl font-serif text-white font-bold mb-3 md:mb-6">
                        Afrosiyob Regency
                    </h2>
                    <p className="text-slate-400 font-light text-sm md:text-lg max-w-md leading-relaxed">
                        {t.footer.desc}
                    </p>
                </div>

                {/* ── Links + Contact: 2-col on mobile, 4-col on desktop ── */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-16 border-b border-white/10 pb-6 md:pb-16 mb-6 md:mb-12">

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-serif text-base md:text-xl mb-3 md:mb-8 font-bold tracking-wide">
                            {t.footer.quickLinks}
                        </h4>
                        <ul className="space-y-3 md:space-y-5">
                            <li>
                                <Link href="#home" className="text-slate-400 hover:text-goldPrimary transition-colors font-light text-sm md:text-base tracking-wide">
                                    {t.footer.home}
                                </Link>
                            </li>
                            <li>
                                <Link href="#about" className="text-slate-400 hover:text-goldPrimary transition-colors font-light text-sm md:text-base tracking-wide">
                                    {t.footer.about}
                                </Link>
                            </li>
                            <li>
                                <Link href="#rooms" className="text-slate-400 hover:text-goldPrimary transition-colors font-light text-sm md:text-base tracking-wide">
                                    {t.footer.rooms}
                                </Link>
                            </li>
                            <li>
                                <Link href="#gallery" className="text-slate-400 hover:text-goldPrimary transition-colors font-light text-sm md:text-base tracking-wide">
                                    {t.footer.gallery}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-serif text-base md:text-xl mb-3 md:mb-8 font-bold tracking-wide">
                            {t.footer.contact}
                        </h4>
                        <ul className="space-y-3 md:space-y-6">
                            <li className="text-slate-400 font-light text-sm md:text-base leading-relaxed">
                                {t.contact.addressText}
                            </li>
                            <li className="text-slate-400 font-light text-sm md:text-base">
                                <span className="text-goldPrimary text-xs uppercase tracking-wider block mb-0.5">{t.booking.phone}</span>
                                <a href="tel:+998555190005" className="hover:text-white transition-colors tracking-wider">
                                    +998 55 519 00 05
                                </a>
                            </li>
                            <li className="text-slate-400 font-light text-sm md:text-base">
                                <span className="text-goldPrimary text-xs uppercase tracking-wider block mb-0.5">Email</span>
                                <a href="mailto:info@afrosiyob-regency.uz" className="hover:text-white transition-colors break-all">
                                    info@afrosiyob-regency.uz
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* ── Copyright ── */}
                <p className="text-center text-xs md:text-sm font-light text-slate-500 tracking-wide">
                    &copy; {new Date().getFullYear()} Afrosiyob Regency Hotel. {t.footer.rights}
                </p>

            </div>
        </footer>
    );
}
