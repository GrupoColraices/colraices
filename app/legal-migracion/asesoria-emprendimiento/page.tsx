import Breadcrumb from "@/app/components/layout/Breadcrumb";
import SiteLayout from "@/app/components/layout/SiteLayout";

import AsesoriaEmprendimientoH from "@/app/components/asesoria-emprendimiento/AsesoriaEmprendimientoH";
import PartiesSection from "@/app/components/asesoria-emprendimiento/PartiesSection";

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