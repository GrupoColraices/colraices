import Breadcrumb from "@/app/components/layout/Breadcrumb";
import SiteLayout from "@/app/components/layout/SiteLayout";

import RepresentationHero from "@/app/components/representacion-legal/RepresentationHero";
import ProblemSection from "@/app/components/representacion-legal/ProblemSection";
import PoderEspecialSection from "@/app/components/representacion-legal/PoderEspecialSection";
import SeccionIncluyeServicio from "@/app/components/representacion-legal/SeccionIncluyeServicio";
import PriceSection from "@/app/components/representacion-legal/PriceSection";
import ProcessSection from "@/app/components/representacion-legal/ProcessSection";

export default function Penciones() 
{
  return (
    <SiteLayout>
      <Breadcrumb />
      <RepresentationHero />
      <ProblemSection />
      <PoderEspecialSection />
      <SeccionIncluyeServicio />
      <PriceSection />
      <ProcessSection />
      

      
      
      

      
 
    </SiteLayout>
  );
}