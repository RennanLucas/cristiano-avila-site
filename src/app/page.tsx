import Header from '@/components/Header';
import Hero from '@/components/Hero';
import InfiniteMarquee from '@/components/InfiniteMarquee';
import Intro from '@/components/Intro';
import Specialties from '@/components/Specialties';
import Demands from '@/components/Demands';
import About from '@/components/About';
import Quote from '@/components/Quote';
import Method from '@/components/Method';
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
      <Intro />
      <Specialties />
      <Demands />
      <About />
      <Quote />
      <Method />
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
