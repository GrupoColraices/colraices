import Breadcrumb from "@/app/components/layout/Breadcrumb";
import HeroLegal from "@/app/components/legal-migracion/HeroLegal";

import ServiciosSection from "@/app/components/legal-migracion/ServiciosSection";
import ComoTrabajamos from "@/app/components/legal-migracion/Como-Trabajamos";
import PreguntasFrecuentes from "@/app/components/legal-migracion/PreguntasFrecuentes";
import CtaBannerSection from "@/app/components/legal-migracion/CtaBannerSection";
import SiteLayout from "@/app/components/layout/SiteLayout";

export default function LegalMigracionPage() {
  return (
    <SiteLayout>
      <Breadcrumb />
      <HeroLegal />
      <ServiciosSection />
      <ComoTrabajamos />
      <PreguntasFrecuentes />
      <CtaBannerSection />
    </SiteLayout>
  );
}
