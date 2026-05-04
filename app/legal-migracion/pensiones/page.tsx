import Breadcrumb from "@/app/components/layout/Breadcrumb";
import SiteLayout from "@/app/components/layout/SiteLayout";

import PensionHero from "@/app/components/pensiones/PensionHero";
import TrustStripP from "@/app/components/pensiones/TrustStripP";
import ProfilesSectionP from "@/app/components/pensiones/ProfilesSectionP";
import ModuleSectionP from "@/app/components/pensiones/ModuleSectionP";
import ModuleSectionLegal from "@/app/components/pensiones/ModuleSectionLegal";

export default function ConstitucionEmpresas() 
{
  return (
    <SiteLayout>
      <Breadcrumb />
      <PensionHero />
      <TrustStripP />
      <ProfilesSectionP />
      <ModuleSectionP />
      <ModuleSectionLegal />
 

    </SiteLayout>
  );
}