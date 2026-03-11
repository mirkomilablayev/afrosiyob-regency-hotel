import Hero from '@/components/Hero';
import Highlights from '@/components/Highlights';
import About from '@/components/About';
import Rooms from '@/components/Rooms';
import Reviews from '@/components/Reviews';
import Gallery from '@/components/Gallery';
import BookingForm from '@/components/BookingForm';
import FAQ from '@/components/FAQ';
import Location from '@/components/Location';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Highlights />
      <About />
      <Rooms />
      <Reviews />
      <Gallery />
      <BookingForm />
      <FAQ />
      <Location />
      <Contact />
      <Footer />
    </main>
  );
}
