import Breadcrumb from "@/app/components/layout/Breadcrumb";
import SiteLayout from "@/app/components/layout/SiteLayout";

import AsesoriaEmprendimientoH from "@/app/components/constitucion-empresas/AsesoriaEmprendimientoH";
import PartiesSection from "@/app/components/constitucion-empresas/PartiesSection";
import ProblemaDineroSection from "@/app/components/constitucion-empresas/ProblemaDineroSection";
import ProcesoSection from "@/app/components/constitucion-empresas/ProcesoSection";

export default function ConstitucionEmpresas() 
{
  return (
    <SiteLayout>
      <Breadcrumb />
      <AsesoriaEmprendimientoH />
      <PartiesSection />
      <ProblemaDineroSection />
      <ProcesoSection />

    </SiteLayout>
  );
}