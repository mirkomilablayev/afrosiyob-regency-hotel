'use client';

import { useState } from 'react';
import { Calendar, Users, Home, Phone } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function BookingForm() {
    const { t } = useLanguage();
    const [formData, setFormData] = useState({
        checkIn: '',
        checkOut: '',
        guests: '1',
        roomType: t.rooms.types.double,
        phone: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const message = `${t.booking.whatsappMsg}\n${t.booking.checkin}: ${formData.checkIn}\n${t.booking.checkout}: ${formData.checkOut}\n${t.booking.guests}: ${formData.guests}\n${t.booking.roomType}: ${formData.roomType}\n${t.booking.phone}: ${formData.phone}`;
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/998555190005?text=${encodedMessage}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <section id="booking" className="py-40 bg-background relative border-y border-white/5 overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[800px] max-w-7xl bg-goldPrimary/5 blur-[150px] rounded-full pointer-events-none" />

            <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">

                <div className="text-center mb-16 reveal opacity-0">
                    <span className="text-goldPrimary font-semibold tracking-[0.2em] uppercase text-sm mb-6 block">
                        {t.booking.tag}
                    </span>
                    <h2 className="text-4xl md:text-6xl font-serif text-white font-bold mb-6">
                        {t.booking.title}
                    </h2>
                    <div className="w-20 h-px bg-goldPrimary mx-auto mb-8"></div>
                    <p className="text-slate-400 font-light text-xl">
                        {t.booking.desc}
                    </p>
                </div>

                <div className="reveal opacity-0" style={{ animationDelay: '0.2s' }}>
                    <form
                        onSubmit={handleSubmit}
                        className="bg-cardBg/60 backdrop-blur-2xl border border-white/10 p-10 md:p-14 rounded-xl shadow-[0_30px_60px_rgba(0,0,0,0.6)] space-y-10"
                    >

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            <div className="space-y-4">
                                <label htmlFor="checkIn" className="text-xs tracking-widest uppercase font-medium text-slate-400 flex items-center">
                                    <Calendar className="w-4 h-4 mr-3 text-goldPrimary" />
                                    {t.booking.checkin}
                                </label>
                                <input
                                    type="date"
                                    id="checkIn"
                                    name="checkIn"
                                    required
                                    value={formData.checkIn}
                                    onChange={handleChange}
                                    className="w-full bg-background/50 border border-white/5 rounded-sm px-6 py-5 text-white placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-goldPrimary focus:border-goldPrimary transition-all appearance-none"
                                />
                            </div>

                            <div className="space-y-4">
                                <label htmlFor="checkOut" className="text-xs tracking-widest uppercase font-medium text-slate-400 flex items-center">
                                    <Calendar className="w-4 h-4 mr-3 text-goldPrimary" />
                                    {t.booking.checkout}
                                </label>
                                <input
                                    type="date"
                                    id="checkOut"
                                    name="checkOut"
                                    required
                                    value={formData.checkOut}
                                    onChange={handleChange}
                                    className="w-full bg-background/50 border border-white/5 rounded-sm px-6 py-5 text-white placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-goldPrimary focus:border-goldPrimary transition-all appearance-none"
                                />
                            </div>

                            <div className="space-y-4">
                                <label htmlFor="guests" className="text-xs tracking-widest uppercase font-medium text-slate-400 flex items-center">
                                    <Users className="w-4 h-4 mr-3 text-goldPrimary" />
                                    {t.booking.guests}
                                </label>
                                <select
                                    id="guests"
                                    name="guests"
                                    value={formData.guests}
                                    onChange={handleChange}
                                    className="w-full bg-background/50 border border-white/5 rounded-sm px-6 py-5 text-white placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-goldPrimary focus:border-goldPrimary transition-all appearance-none"
                                >
                                    <option value="1" className="text-black">1 {t.booking.adult}</option>
                                    <option value="2" className="text-black">2 {t.booking.adults}</option>
                                    <option value="3" className="text-black">3 {t.booking.adults}</option>
                                    <option value="4" className="text-black">4 {t.booking.adults}</option>
                                    <option value="other" className="text-black">{t.booking.more}</option>
                                </select>
                            </div>

                            <div className="space-y-4">
                                <label htmlFor="roomType" className="text-xs tracking-widest uppercase font-medium text-slate-400 flex items-center">
                                    <Home className="w-4 h-4 mr-3 text-goldPrimary" />
                                    {t.booking.roomType}
                                </label>
                                <select
                                    id="roomType"
                                    name="roomType"
                                    value={formData.roomType}
                                    onChange={handleChange}
                                    className="w-full bg-background/50 border border-white/5 rounded-sm px-6 py-5 text-white placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-goldPrimary focus:border-goldPrimary transition-all appearance-none"
                                >
                                    <option value={t.rooms.types.double} className="text-black">{t.rooms.types.double}</option>
                                    <option value={t.rooms.types.twin} className="text-black">{t.rooms.types.twin}</option>
                                    <option value={t.rooms.types.deluxe} className="text-black">{t.rooms.types.deluxe}</option>
                                </select>
                            </div>

                            <div className="space-y-4 md:col-span-2">
                                <label htmlFor="phone" className="text-xs tracking-widest uppercase font-medium text-slate-400 flex items-center">
                                    <Phone className="w-4 h-4 mr-3 text-goldPrimary" />
                                    {t.booking.phone}
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    required
                                    placeholder="+998 __ ___ __ __"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full bg-background/50 border border-white/5 rounded-sm px-6 py-5 text-white placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-goldPrimary focus:border-goldPrimary transition-all"
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full mt-10 bg-gradient-to-r from-goldPrimary to-goldButton hover:from-goldButton hover:to-goldPrimary text-white tracking-widest uppercase text-sm font-bold py-6 rounded-sm transition-all duration-300 transform hover:-translate-y-1 shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)]"
                        >
                            {t.booking.submit}
                        </button>

                    </form>
                </div>

            </div>
        </section>
    );
}
