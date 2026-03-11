'use client';

import { useState, useRef } from 'react';
import { Star, StarHalf } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

function ReviewCard({ review, t }: { review: { id: number; text: string; author: string }; t: any }) {
    return (
        <div className="bg-cardBg border border-white/5 p-10 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden h-full flex flex-col">
            <div className="absolute -top-4 -left-2 text-9xl text-white/5 font-serif select-none pointer-events-none">&quot;</div>
            <div className="flex text-goldPrimary mb-8 relative z-10">
                {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current mr-1" strokeWidth={1} />
                ))}
            </div>
            <p className="text-slate-300 text-lg leading-loose mb-10 italic relative z-10 font-serif flex-1">
                "{review.text}"
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
    );
}

export default function Reviews() {
    const { t } = useLanguage();
    const [activeIdx, setActiveIdx] = useState(0);
    const touchStartX = useRef<number | null>(null);

    const reviews = [
        { id: 1, text: t.reviews.review1, author: t.reviews.author1 },
        { id: 2, text: t.reviews.review2, author: t.reviews.author2 },
        { id: 3, text: t.reviews.review3, author: t.reviews.author3 },
        { id: 4, text: t.reviews.review4, author: t.reviews.author4 },
        { id: 5, text: t.reviews.review5, author: t.reviews.author5 },
        { id: 6, text: t.reviews.review6, author: t.reviews.author6 }
    ];

    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        if (touchStartX.current === null) return;
        const diff = touchStartX.current - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 40) {
            if (diff > 0) setActiveIdx(prev => Math.min(prev + 1, reviews.length - 1));
            else setActiveIdx(prev => Math.max(prev - 1, 0));
        }
        touchStartX.current = null;
    };

    return (
        <section id="reviews" className="py-32 bg-background relative border-b border-white/5">
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-goldPrimary/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

                {/* Header */}
                <div className="flex flex-col lg:flex-row items-center justify-between mb-24 reveal opacity-0">
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

                {/* ── MOBILE: Swipeable carousel ── */}
                <div className="md:hidden">
                    <div
                        className="overflow-hidden"
                        onTouchStart={handleTouchStart}
                        onTouchEnd={handleTouchEnd}
                    >
                        <div
                            className="flex transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
                            style={{ transform: `translateX(-${activeIdx * 100}%)` }}
                        >
                            {reviews.map((review) => (
                                <div key={review.id} className="w-full shrink-0 px-1">
                                    <ReviewCard review={review} t={t} />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Dot indicators */}
                    <div className="flex justify-center items-center space-x-2 mt-8">
                        {reviews.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setActiveIdx(idx)}
                                className={`rounded-full transition-all duration-300 ${idx === activeIdx
                                        ? 'w-6 h-2 bg-goldPrimary shadow-[0_0_8px_rgba(212,175,55,0.6)]'
                                        : 'w-2 h-2 bg-white/20 hover:bg-white/40'
                                    }`}
                                aria-label={`Review ${idx + 1}`}
                            />
                        ))}
                    </div>

                    {/* Swipe hint on first load */}
                    <p className="text-center text-slate-500 text-xs tracking-widest uppercase mt-4">
                        ← swipe →
                    </p>
                </div>

                {/* ── DESKTOP: 3-column grid ── */}
                <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {reviews.map((review, idx) => (
                        <div
                            key={review.id}
                            className="transition-all duration-500 hover:-translate-y-2 reveal opacity-0"
                            style={{ animationDelay: `${0.2 + idx * 0.15}s` }}
                        >
                            <ReviewCard review={review} t={t} />
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
