import Breadcrumb from "@/app/components/layout/Breadcrumb";
import SiteLayout from "@/app/components/layout/SiteLayout";

import BrujulaHero from "@/app/components/brujula-inmobiliaria/BrujulaHero";
import RiesgosSolucionesSection from "@/app/components/brujula-inmobiliaria/RiesgosSolucionesSection";
import CompraSeguraProcesoSection from "@/app/components/brujula-inmobiliaria/CompraSeguraProcesoSection";
import BrujulaPrecioSection from "@/app/components/brujula-inmobiliaria/BrujulaPrecioSection";
import BrujulaFaqSection from "@/app/components/brujula-inmobiliaria/BrujulaPrecioSection";

export default function InmobiliariaBrujula() 
{
  return (
    <SiteLayout>
      <Breadcrumb />
      <BrujulaHero />
      <RiesgosSolucionesSection />
      <CompraSeguraProcesoSection />
      <BrujulaPrecioSection />
      <BrujulaFaqSection />
    </SiteLayout>
  );
}