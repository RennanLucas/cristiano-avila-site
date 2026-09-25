import Header from "@/components/Header";
import ScrollProgress from "@/components/ScrollProgress";
import Hero from "@/components/Hero";
import InfiniteMarquee from "@/components/InfiniteMarquee";
import TrustBadges from "@/components/TrustBadges";
import Intro from "@/components/Intro";
import Specialties from "@/components/Specialties";
import QuickTriage from "@/components/QuickTriage";
import Demands from "@/components/Demands";
import About from "@/components/About";
import CareerTimeline from "@/components/CareerTimeline";
import Quote from "@/components/Quote";
import Method from "@/components/Method";
import ModalityComparison from "@/components/ModalityComparison";
import ReembolsoGuide from "@/components/ReembolsoGuide";
import Testimonials from "@/components/Testimonials";
import Locations from "@/components/Locations";
import FaqSection from "@/components/FaqSection";
import BlogPreview from "@/components/BlogPreview";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import FloatingDock from "@/components/FloatingDock";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import CookieBanner from "@/components/CookieBanner";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#111111] overflow-x-hidden selection:bg-black selection:text-white relative">
      <ScrollProgress />
      <Header />
      <Hero />
      <InfiniteMarquee />
      <TrustBadges />
      <Intro />
      <Specialties />
      <QuickTriage />
      <Demands />
      <About />
      <CareerTimeline />
      <Quote />
      <Method />
      <ModalityComparison />
      <ReembolsoGuide />
      <Testimonials />
      <Locations />
      <FaqSection />
      <BlogPreview />
      <CtaSection />
      <Footer />
      <FloatingDock />
      <FloatingWhatsApp />
      <CookieBanner />
    </main>
  );
}
