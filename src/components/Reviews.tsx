'use client';

import { Star, StarHalf } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Reviews() {
    const { t } = useLanguage();

    const reviews = [
        { id: 1, text: t.reviews.review1, author: t.reviews.author1 },
        { id: 2, text: t.reviews.review2, author: t.reviews.author2 },
        { id: 3, text: t.reviews.review3, author: t.reviews.author3 },
        { id: 4, text: t.reviews.review4, author: t.reviews.author4 },
        { id: 5, text: t.reviews.review5, author: t.reviews.author5 },
        { id: 6, text: t.reviews.review6, author: t.reviews.author6 }
    ];

    return (
        <section id="reviews" className="py-32 bg-background relative border-b border-white/5">
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-goldPrimary/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

                <div className="flex flex-col lg:flex-row items-center justify-between mb-24 max-w-7xl mx-auto reveal opacity-0">
                    <div className="text-center lg:text-left mb-12 lg:mb-0">
                        <span className="text-goldPrimary font-semibold tracking-[0.2em] uppercase text-sm mb-6 block">
                            {t.reviews.tag}
                        </span>
                        <h2 className="text-4xl md:text-6xl font-serif text-white font-bold mb-6">
                            {t.reviews.title}
                        </h2>
                        <div className="w-16 h-px bg-goldPrimary rounded-full lg:mx-0 mx-auto"></div>
                    </div>

                    <div className="flex items-center space-x-8 bg-cardBg border border-white/10 px-10 py-8 rounded-xl shadow-2xl">
                        <div className="text-6xl font-serif font-bold text-white">4.5</div>
                        <div>
                            <div className="flex text-goldPrimary mb-2">
                                <Star className="w-6 h-6 fill-current" strokeWidth={1} />
                                <Star className="w-6 h-6 fill-current" strokeWidth={1} />
                                <Star className="w-6 h-6 fill-current" strokeWidth={1} />
                                <Star className="w-6 h-6 fill-current" strokeWidth={1} />
                                <StarHalf className="w-6 h-6 fill-current" strokeWidth={1} />
                            </div>
                            <span className="text-sm text-slate-400 font-medium tracking-wide">{t.reviews.overall} (6)</span>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
                    {reviews.map((review, idx) => (
                        <div
                            key={review.id}
                            className="bg-cardBg border border-white/5 p-12 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden transition-all duration-500 hover:border-goldPrimary/30 hover:-translate-y-2 reveal opacity-0"
                            style={{ animationDelay: `${0.2 + idx * 0.2}s` }}
                        >
                            <div className="absolute -top-4 -left-2 text-9xl text-white/5 font-serif select-none pointer-events-none">&quot;</div>
                            <div className="flex text-goldPrimary mb-8 relative z-10">
                                <Star className="w-5 h-5 fill-current mr-1" strokeWidth={1} />
                                <Star className="w-5 h-5 fill-current mr-1" strokeWidth={1} />
                                <Star className="w-5 h-5 fill-current mr-1" strokeWidth={1} />
                                <Star className="w-5 h-5 fill-current mr-1" strokeWidth={1} />
                                <Star className="w-5 h-5 fill-current mr-1" strokeWidth={1} />
                            </div>
                            <p className="text-slate-300 text-xl leading-loose mb-10 italic relative z-10 font-serif">
                                “{review.text}”
                            </p>
                            <div className="flex items-center mt-auto border-t border-white/5 pt-8">
                                <div className="w-12 h-12 rounded-full bg-secondaryBg flex items-center justify-center text-goldPrimary border border-goldPrimary/20 font-serif text-lg shrink-0">
                                    {review.author.charAt(0)}
                                </div>
                                <div className="ml-5">
                                    <p className="text-white font-medium tracking-wide">{review.author}</p>
                                    <p className="text-goldPrimary opacity-80 text-xs uppercase tracking-widest mt-1">{t.reviews.verified}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
