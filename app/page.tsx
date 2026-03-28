import HeroSection from "./components/home/HeroSection";
import TrustStripSection from "./components/home/TrustStripSection";
import QuizSection from "./components/home/QuizSection";
import ServicesSection from "./components/home/ServicesSection";
import CreditSection from "./components/home/CreditSection";
import TourSection from "./components/home/TourSection";
import TestimonialsSection from "./components/home/TestimonialsSection";
import BlogSection from "./components/home/BlogSection";
import CtaBannerSection from "./components/home/CtaBannerSection";
import AliadosSection from "./components/home/AliadosSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <TrustStripSection />
      <QuizSection />
      <ServicesSection />
      <CreditSection />
      <TourSection />
      <TestimonialsSection />
      <BlogSection />
      <CtaBannerSection />
      <AliadosSection />
    </main>
  );
}