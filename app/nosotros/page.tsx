import SiteLayout from "@/app/components/layout/SiteLayout";

import HeroSection from "@/app/components/nosotros/HeroSection";
import EcoProposito from "@/app/components/nosotros/EcoProposito";
import EcosistemaColraices from "@/app/components/nosotros/EcosistemaColraices";
import HistoriaSection from "@/app/components/nosotros/HistoriaSection";

export default function Nosotros() 
{
  return (

    <SiteLayout>
      <HeroSection />
      <EcoProposito />
      <EcosistemaColraices />
      <HistoriaSection />


    </SiteLayout>
  );
} 