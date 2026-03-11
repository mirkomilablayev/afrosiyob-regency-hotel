import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import MobileStickyBar from '@/components/MobileStickyBar';
import { LanguageProvider } from '@/context/LanguageContext';
import ScrollObserver from '@/components/ScrollObserver';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Afrosiyob Regency Hotel | Tashkent Hotel',
  description: 'Afrosiyob Regency Hotel offers comfortable rooms, modern amenities, and convenient access to Tashkent city center and airport. Perfect for business and leisure travelers in Tashkent.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const hotelSchema = {
    "@context": "https://schema.org",
    "@type": "Hotel",
    "name": "Afrosiyob Regency Hotel",
    "telephone": "+998555190005",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Tashkent",
      "addressCountry": "Uzbekistan"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 41.271110,
      "longitude": 69.264784
    }
  };

  return (
    <html lang="uz" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(hotelSchema) }}
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans text-textPrimary bg-background antialiased`} suppressHydrationWarning>
        <LanguageProvider>
          {children}
          <ScrollObserver />
          <MobileStickyBar />
        </LanguageProvider>
      </body>
    </html>
  );
}
