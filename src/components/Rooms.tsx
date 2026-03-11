'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export default function Rooms() {
    const { t } = useLanguage();

    const rooms = [
        {
            id: 'double-room',
            name: t.rooms.types.double,
            image: '/images/room_double.png',
            price: 50,
            features: [t.rooms.features.kingBed, t.rooms.features.cityView, t.rooms.features.wifi, t.rooms.features.roomService],
        },
        {
            id: 'twin-room',
            name: t.rooms.types.twin,
            image: '/images/room_twin.png',
            price: 55,
            features: [t.rooms.features.twinBeds, t.rooms.features.cityView, t.rooms.features.wifi, t.rooms.features.desk],
        },
        {
            id: 'deluxe-room',
            name: t.rooms.types.deluxe,
            image: '/images/room_deluxe.png',
            price: 70,
            features: [t.rooms.features.suite, t.rooms.features.panoramic, t.rooms.features.living, t.rooms.features.minibar],
        },
    ];

    return (
        <section id="rooms" className="py-32 bg-secondaryBg border-y border-white/5">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                <div className="text-center mb-24 max-w-3xl mx-auto reveal opacity-0">
                    <span className="text-goldPrimary font-semibold tracking-[0.2em] uppercase text-sm mb-6 block">
                        {t.rooms.tag}
                    </span>
                    <h2 className="text-4xl md:text-6xl font-serif text-white font-bold mb-8">
                        {t.rooms.title}
                    </h2>
                    <p className="text-slate-400 font-light text-xl">
                        {t.rooms.desc}
                    </p>
                    <div className="w-20 h-px bg-goldPrimary mx-auto mt-10"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {rooms.map((room, idx) => (
                        <div
                            key={room.id}
                            className="group flex flex-col bg-cardBg border border-white/5 rounded-xl overflow-hidden shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.6)] transition-all duration-700 transform hover:-translate-y-3 reveal opacity-0"
                            style={{ animationDelay: `${0.2 + idx * 0.15}s` }}
                        >

                            <div className="relative aspect-[4/3] w-full overflow-hidden">
                                <Image
                                    src={room.image}
                                    alt={room.name}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-cardBg via-transparent to-transparent opacity-90" />
                            </div>

                            <div className="p-10 flex flex-col flex-1 relative -mt-6 bg-cardBg z-10 transition-colors duration-500">

                                <h3 className="text-3xl font-serif text-white font-bold mb-2">
                                    {room.name}
                                </h3>
                                <div className="text-goldPrimary font-serif text-2xl mb-8">
                                    <span className="text-base font-sans text-slate-400 font-light">{t.rooms.from}</span> ${room.price} <span className="text-base font-sans font-light text-slate-500">{t.rooms.night}</span>
                                </div>

                                <ul className="mb-10 space-y-4 flex-1">
                                    {room.features.map((feature, index) => (
                                        <li key={index} className="flex items-center text-slate-300 font-light text-sm tracking-wide">
                                            <div className="w-1.5 h-1.5 rounded-full bg-goldPrimary mr-4 shadow-[0_0_5px_rgba(212,175,55,0.8)]" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <Link
                                    href="#booking"
                                    className="block w-full text-center py-4 bg-transparent border border-white/20 hover:border-goldPrimary hover:bg-goldPrimary hover:text-background text-white uppercase tracking-widest text-xs font-bold rounded transition-all duration-500 group-hover:shadow-[0_0_15px_rgba(212,175,55,0.3)]"
                                >
                                    {t.rooms.bookNow}
                                </Link>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
