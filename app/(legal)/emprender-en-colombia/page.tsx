import Breadcrumb from "@/app/components/layout/Breadcrumb";
import SiteLayout from "@/app/components/layout/SiteLayout";

import AsesoriaEmprendimientoH from "@/app/components/constitucion-empresas/AsesoriaEmprendimientoH";
import PartiesSection from "@/app/components/constitucion-empresas/PartiesSection";
import ProblemaDineroSection from "@/app/components/constitucion-empresas/ProblemaDineroSection";
import ProcesoSection from "@/app/components/constitucion-empresas/ProcesoSection";
import QueIncluyeSection from "@/app/components/constitucion-empresas/QueIncluyeSection";
import InversionSection from "@/app/components/constitucion-empresas/InversionSection";
import PerfilamientoServicioCe from "@/app/components/constitucion-empresas/PerfilamientoServicioCe";
import CEQuoteSection from "@/app/components/constitucion-empresas/CEQuoteSection";

export default function ConstitucionEmpresas() 
{
  return (
    <SiteLayout>
      <Breadcrumb />
      <AsesoriaEmprendimientoH />
      <PartiesSection />
      <ProblemaDineroSection />
      <ProcesoSection />
      <QueIncluyeSection />
      <InversionSection />
      <PerfilamientoServicioCe />
      <CEQuoteSection />

    </SiteLayout>
  );
}