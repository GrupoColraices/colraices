import Breadcrumb from "@/app/components/layout/Breadcrumb";
import SiteLayout from "@/app/components/layout/SiteLayout";

import PensionHero from "@/app/components/pensiones/PensionHero";
import TrustStripP from "@/app/components/pensiones/TrustStripP";

export default function ConstitucionEmpresas() 
{
  return (
    <SiteLayout>
      <Breadcrumb />
      <PensionHero />
      <TrustStripP />
 

    </SiteLayout>
  );
}