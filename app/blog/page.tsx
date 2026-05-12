import Breadcrumb from "@/app/components/layout/Breadcrumb";
import SiteLayout from "@/app/components/layout/SiteLayout";
import BlogHero from "@/app/components/blog/BlogHero";
import StartHereSection from "@/app/components/blog/StartHereSection";
import ExploreSection from "@/app/components/blog/ExploreSection";
import StartHelpSection from "@/app/components/blog/StartHelpSection";
import MultimediaSection from "@/app/components/blog/MultimediaSection";


export default function Bolg() 
{
  return (
    <SiteLayout>
      <Breadcrumb />
      <BlogHero />
      <StartHereSection />
      <ExploreSection />
      <StartHelpSection />
      <MultimediaSection />

      
      
      
    </SiteLayout>
  );
}