import Breadcrumb from "@/app/components/layout/Breadcrumb";
import SiteLayout from "@/app/components/layout/SiteLayout";

import RepresentationHero from "@/app/components/representacion-legal/RepresentationHero";
import ProblemSection from "@/app/components/representacion-legal/ProblemSection";
import PoderEspecialSection from "@/app/components/representacion-legal/PoderEspecialSection";
import SeccionIncluyeServicio from "@/app/components/representacion-legal/SeccionIncluyeServicio";

export default function Penciones() 
{
  return (
    <SiteLayout>
      <Breadcrumb />
      <RepresentationHero />
      <ProblemSection />
      <PoderEspecialSection />
      <SeccionIncluyeServicio />
      
      

      
 
    </SiteLayout>
  );
}