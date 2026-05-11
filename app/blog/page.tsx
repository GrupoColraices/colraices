import Breadcrumb from "@/app/components/layout/Breadcrumb";
import SiteLayout from "@/app/components/layout/SiteLayout";
import BlogHero from "@/app/components/blog/BlogHero";
import StartHereSection from "@/app/components/blog/StartHereSection";

export default function Bolg() 
{
  return (
    <SiteLayout>
      <Breadcrumb />
      <BlogHero />
      <StartHereSection />
      
    </SiteLayout>
  );
}