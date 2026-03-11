'use client';

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
    const { t } = useLanguage();

    return (
        <footer className="bg-secondaryBg text-slate-300 py-24 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 border-b border-white/10 pb-16 mb-12">

                    <div className="col-span-1 lg:col-span-2 pr-0 lg:pr-12">
                        <h2 className="text-4xl font-serif text-white font-bold mb-8">
                            Afrosiyob Regency
                        </h2>
                        <p className="text-slate-400 font-light text-lg max-w-md leading-relaxed">
                            {t.footer.desc}
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-serif text-xl mb-8 font-bold tracking-wide">{t.footer.quickLinks}</h4>
                        <ul className="space-y-5">
                            <li>
                                <Link href="#home" className="text-slate-400 hover:text-goldPrimary transition-colors font-light tracking-wide">
                                    {t.footer.home}
                                </Link>
                            </li>
                            <li>
                                <Link href="#about" className="text-slate-400 hover:text-goldPrimary transition-colors font-light tracking-wide">
                                    {t.footer.about}
                                </Link>
                            </li>
                            <li>
                                <Link href="#rooms" className="text-slate-400 hover:text-goldPrimary transition-colors font-light tracking-wide">
                                    {t.footer.rooms}
                                </Link>
                            </li>
                            <li>
                                <Link href="#gallery" className="text-slate-400 hover:text-goldPrimary transition-colors font-light tracking-wide">
                                    {t.footer.gallery}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-serif text-xl mb-8 font-bold tracking-wide">{t.footer.contact}</h4>
                        <ul className="space-y-6">
                            <li className="text-slate-400 font-light leading-relaxed">
                                {t.contact.addressText}
                            </li>
                            <li className="text-slate-400 font-light">
                                <span className="text-goldPrimary">{t.booking.phone}:</span>{' '}
                                <a href="tel:+998555190005" className="hover:text-white transition-colors block mt-1 tracking-wider">+998 55 519 00 05</a>
                            </li>
                            <li className="text-slate-400 font-light">
                                <span className="text-goldPrimary">Email:</span>{' '}
                                <a href="mailto:info@afrosiyob-regency.uz" className="hover:text-white transition-colors block mt-1">info@afrosiyob-regency.uz</a>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="flex justify-center items-center text-sm font-light text-slate-500 tracking-wide text-center">
                    <p>&copy; {new Date().getFullYear()} Afrosiyob Regency Hotel. {t.footer.rights}</p>
                </div>
            </div>
        </footer>
    );
}
