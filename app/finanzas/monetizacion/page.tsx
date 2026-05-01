import Breadcrumb from "@/app/components/layout/Breadcrumb";
import SiteLayout from "@/app/components/layout/SiteLayout";

import HeroMonetizacion from "@/app/components/monetizacion/HeroMonetizacion";
import TopBarBc from "@/app/components/monetizacion/TopBarBc";
import ProblemaRealMo from "@/app/components/monetizacion/ProblemaRealMo";
import ParaQuienEsMo from "@/app/components/monetizacion/ParaQuienEsMo";
import ServicioMo from "@/app/components/monetizacion/ServicioMo";
import ProcesoPasosMo from "@/app/components/monetizacion/ProcesoPasosMo";
import DuracionProcesoMo from "@/app/components/monetizacion/DuracionProcesoMo";


export default function Monetizacion() {
  return (
    <SiteLayout>
      <Breadcrumb />
      <HeroMonetizacion />
      <TopBarBc />
      <ProblemaRealMo />
      <ParaQuienEsMo />
      <ServicioMo />
      <ProcesoPasosMo />
      <DuracionProcesoMo />
    </SiteLayout>
  );
}