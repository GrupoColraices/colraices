import Breadcrumb from "@/app/components/layout/Breadcrumb";
import SiteLayout from "@/app/components/layout/SiteLayout";

import LlaveInmobiliariaHero from "@/app/components/encontramos-inmueble/LlaveInmobiliariaHero";
import ProblemsSection from "@/app/components/encontramos-inmueble/ProblemsSection";
import IncluyeServicioSection from "@/app/components/encontramos-inmueble/IncluyeServicioSection";

export default function EncontramosInmueb() 
{
  return (
    <SiteLayout>
      <Breadcrumb />
      <LlaveInmobiliariaHero />
      <ProblemsSection />
      <IncluyeServicioSection />
      

      
      

      
    </SiteLayout>
  );
}