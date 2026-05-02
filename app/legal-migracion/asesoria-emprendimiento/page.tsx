import Breadcrumb from "@/app/components/layout/Breadcrumb";
import SiteLayout from "@/app/components/layout/SiteLayout";

import AsesoriaEmprendimiento from "@/app/components/asesoria-emprendimiento/AsesoriaEmprendimiento";
import PartiesSection from "@/app/components/asesoria-emprendimiento/PartiesSection";

export default function AsesoriaEmprendimient() 
{
  return (
    <SiteLayout>
      <Breadcrumb />
      <AsesoriaEmprendimiento />
      <PartiesSection />
    

    </SiteLayout>
  );
}