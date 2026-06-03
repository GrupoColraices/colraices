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
import SiteLayout from "@/app/components/layout/SiteLayout";
import { getBlogPosts } from "@/app/lib/blogApi";

export default async function Home() {
  const { posts, error } = await getBlogPosts({ perPage: 3 });

  return (
    <SiteLayout>
      <HeroSection />
      <TrustStripSection />
      <QuizSection />
      <UnitsSection />
      <CreditSection />
      <TourSection />
      <TestimonialsSection />
      <BlogSection posts={posts} postsError={error} />
      <CtaBannerSection />
      <AliadosSection />
    </SiteLayout>
  );
}
