import Breadcrumb from "@/app/components/layout/Breadcrumb";
import SiteLayout from "@/app/components/layout/SiteLayout";

import BrujulaHero from "@/app/components/brujula-inmobiliaria/BrujulaHero";
import RiesgosSolucionesSection from "@/app/components/brujula-inmobiliaria/RiesgosSolucionesSection";

export default function InmobiliariaBrujula() 
{
  return (
    <SiteLayout>
      <Breadcrumb />
      <BrujulaHero />
      <RiesgosSolucionesSection />
      

    </SiteLayout>
  );
}