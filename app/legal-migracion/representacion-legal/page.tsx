import Breadcrumb from "@/app/components/layout/Breadcrumb";
import SiteLayout from "@/app/components/layout/SiteLayout";

import RepresentationHero from "@/app/components/representacion-legal/RepresentationHero";

export default function Penciones() 
{
  return (
    <SiteLayout>
      <Breadcrumb />
      <RepresentationHero />
 
    </SiteLayout>
  );
}