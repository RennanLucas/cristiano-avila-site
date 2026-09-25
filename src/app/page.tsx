import Header from '@/components/Header';
import Hero from '@/components/Hero';
import InfiniteMarquee from '@/components/InfiniteMarquee';
import TrustBadges from '@/components/TrustBadges';
import Intro from '@/components/Intro';
import Specialties from '@/components/Specialties';
import QuickTriage from '@/components/QuickTriage';
import Demands from '@/components/Demands';
import About from '@/components/About';
import Quote from '@/components/Quote';
import Method from '@/components/Method';
import ModalityComparison from '@/components/ModalityComparison';
import Testimonials from '@/components/Testimonials';
import Locations from '@/components/Locations';
import BlogPreview from '@/components/BlogPreview';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import CookieBanner from '@/components/CookieBanner';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#111111] overflow-x-hidden selection:bg-black selection:text-white">
      <Header />
      <Hero />
      <InfiniteMarquee />
      <TrustBadges />
      <Intro />
      <Specialties />
      <QuickTriage />
      <Demands />
      <About />
      <Quote />
      <Method />
      <ModalityComparison />
      <Testimonials />
      <Locations />
      <BlogPreview />
      <CtaSection />
      <Footer />
      <FloatingWhatsApp />
      <CookieBanner />
    </main>
  );
}
