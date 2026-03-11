'use client';

import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

export default function Gallery() {
    const { t } = useLanguage();

    const images = [
        { id: 1, src: '/images/gallery_1.png', alt: t.gallery.images.lobby },
        { id: 2, src: '/images/gallery_2.png', alt: t.gallery.images.restaurant },
        { id: 3, src: '/images/gallery_3.png', alt: t.gallery.images.spa },
        { id: 4, src: '/images/gallery_4.png', alt: t.gallery.images.breakfast },
        { id: 5, src: '/images/gallery_5.png', alt: t.gallery.images.fitness },
        { id: 6, src: '/images/gallery_6.png', alt: t.gallery.images.sunset },
    ];

    return (
        <section id="gallery" className="py-32 bg-secondaryBg relative">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-24 reveal opacity-0">
                    <span className="text-goldPrimary font-semibold tracking-[0.2em] uppercase text-sm mb-6 block">
                        {t.gallery.tag}
                    </span>
                    <h2 className="text-4xl md:text-6xl font-serif text-white font-bold mb-8">
                        {t.gallery.title}
                    </h2>
                    <p className="text-slate-400 font-light text-xl max-w-2xl mx-auto mb-8">
                        {t.gallery.desc}
                    </p>
                    <div className="w-20 h-px bg-goldPrimary mx-auto"></div>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[250px] md:auto-rows-[350px] reveal opacity-0" style={{ animationDelay: '0.2s' }}>
                    {images.map((img, i) => {
                        // Elegant masonry-like layout
                        let colSpan = 'col-span-1 lg:col-span-1';
                        let rowSpan = 'row-span-1';
                        if (i === 0) {
                            colSpan = 'col-span-2 lg:col-span-2';
                            rowSpan = 'row-span-2';
                        } else if (i === 3) {
                            colSpan = 'col-span-2 lg:col-span-2';
                        }

                        return (
                            <div
                                key={img.id}
                                className={`relative overflow-hidden group rounded-sm bg-cardBg ${colSpan} ${rowSpan}`}
                            >
                                <Image
                                    src={img.src}
                                    alt={img.alt}
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                    className="object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-700" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-end p-8">
                                    <span className="text-white font-serif text-2xl tracking-wide opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-700">
                                        {img.alt}
                                    </span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
