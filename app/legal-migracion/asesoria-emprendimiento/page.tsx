import Breadcrumb from "@/app/components/layout/Breadcrumb";
import SiteLayout from "@/app/components/layout/SiteLayout";

import AsesoriaEmprendimiento from "@/app/components/asesoria-emprendimiento/AsesoriaEmprendimiento";

export default function AsesoriaEmprendimient() 
{
  return (
    <SiteLayout>
      <Breadcrumb />
      <AsesoriaEmprendimiento />
    

    </SiteLayout>
  );
}