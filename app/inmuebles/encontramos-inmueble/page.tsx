import Breadcrumb from "@/app/components/layout/Breadcrumb";
import SiteLayout from "@/app/components/layout/SiteLayout";

import LlaveInmobiliariaHero from "@/app/components/encontramos-inmueble/LlaveInmobiliariaHero";
import ProblemsSection from "@/app/components/encontramos-inmueble/ProblemsSection";
import IncluyeServicioSection from "@/app/components/encontramos-inmueble/IncluyeServicioSection";
import ServicioProcesoSection from "@/app/components/encontramos-inmueble/ServicioProcesoSection";
import InversionSection from "@/app/components/encontramos-inmueble/InversionSection";
import PerfilamientoSection from "@/app/components/encontramos-inmueble/PerfilamientoSection";

export default function EncontramosInmueb() 
{
  return (
    <SiteLayout>
      <Breadcrumb />
      <LlaveInmobiliariaHero />
      <ProblemsSection />
      <IncluyeServicioSection />
      <ServicioProcesoSection />
      <InversionSection />
      <PerfilamientoSection />
      
      

      
      

      
    </SiteLayout>
  );
}