import HeroSection from "./components/home/HeroSection";
import TrustStripSection from "./components/home/TrustStripSection";
import QuizSection from "./components/home/QuizSection";
import CreditSection from "./components/home/CreditSection";
import TourSection from "./components/home/TourSection";
import TestimonialsSection from "./components/home/TestimonialsSection";
import BlogSection from "./components/home/BlogSection";
import CtaBannerSection from "./components/home/CtaBannerSection";
import AliadosSection from "./components/home/AliadosSection";
import UnitsSection from "./components/home/UnitsSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <TrustStripSection />
      <QuizSection />
      <UnitsSection />
      <CreditSection />
      <TourSection />
      <TestimonialsSection />
      <BlogSection />
      <CtaBannerSection />
      <AliadosSection />
    </main>
  );
}