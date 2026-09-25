import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Specialties from "@/components/Specialties";
import QuickTriage from "@/components/QuickTriage";
import About from "@/components/About";
import Method from "@/components/Method";
import Testimonials from "@/components/Testimonials";
import YouTubeSection from "@/components/YouTubeSection";
import Locations from "@/components/Locations";
import FaqSection from "@/components/FaqSection";
import BlogPreview from "@/components/BlogPreview";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import FloatingDock from "@/components/FloatingDock";
import CookieBanner from "@/components/CookieBanner";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#111111] overflow-x-hidden selection:bg-black selection:text-white relative pb-16 sm:pb-0">
      <Header />
      <Hero />
      <Intro />
      <Specialties />
      <QuickTriage />
      <About />
      <Method />
      <Locations />
      <Testimonials />
      <YouTubeSection />
      <FaqSection />
      <BlogPreview />
      <CtaSection />
      <Footer />
      <FloatingDock />
      <CookieBanner />
    </main>
  );
}
