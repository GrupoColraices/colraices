import Breadcrumb from "@/app/components/layout/Breadcrumb";
import SiteLayout from "@/app/components/layout/SiteLayout";

import AsesoriaEmprendimientoH from "@/app/components/constitucion-empresas/AsesoriaEmprendimientoH";
import PartiesSection from "@/app/components/constitucion-empresas/PartiesSection";
import ProblemaDineroSection from "@/app/components/constitucion-empresas/ProblemaDineroSection";
import ProcesoSection from "@/app/components/constitucion-empresas/ProcesoSection";
import QueIncluyeSection from "@/app/components/constitucion-empresas/QueIncluyeSection";
import InversionSection from "@/app/components/constitucion-empresas/InversionSection";

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

    </SiteLayout>
  );
}