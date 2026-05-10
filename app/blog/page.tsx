import Breadcrumb from "@/app/components/layout/Breadcrumb";
import SiteLayout from "@/app/components/layout/SiteLayout";
import BlogHero from "@/app/components/blog/BlogHero";

export default function Bolg() 
{
  return (
    <SiteLayout>
      <Breadcrumb />
      <BlogHero />
    </SiteLayout>
  );
}