'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { dictionaries, Language, Dictionary } from '@/i18n/dictionaries';

interface LanguageContextProps {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: Dictionary;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
    // Use 'ru' as default to match SSR HTML
    const [language, setLanguageState] = useState<Language>('ru');

    // Load saved language on mount
    useEffect(() => {
        const saved = localStorage.getItem('app_lang') as Language;
        if (saved && (saved === 'uz' || saved === 'en' || saved === 'ru')) {
            setLanguageState(saved);
        }
    }, []);

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        localStorage.setItem('app_lang', lang);
    };

    const t = dictionaries[language];

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
