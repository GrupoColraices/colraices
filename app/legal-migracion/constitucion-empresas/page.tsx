import Breadcrumb from "@/app/components/layout/Breadcrumb";
import SiteLayout from "@/app/components/layout/SiteLayout";

import AsesoriaEmprendimientoH from "@/app/components/constitucion-empresas/AsesoriaEmprendimientoH";
import PartiesSection from "@/app/components/constitucion-empresas/PartiesSection";

export default function AsesoriaEmprendimient() 
{
  return (
    <SiteLayout>
      <Breadcrumb />
      <AsesoriaEmprendimientoH />
      <PartiesSection />

    </SiteLayout>
  );
}