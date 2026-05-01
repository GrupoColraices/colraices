import Breadcrumb from "@/app/components/layout/Breadcrumb";
import SiteLayout from "@/app/components/layout/SiteLayout";

import AsesoriaMigratoria from "@/app/components/asesoria-migratoria/AsesoriaMigratoria";
import ProblemaRealMigracion from "@/app/components/asesoria-migratoria/ProblemaRealMigracion";
import CoberturaSlider from "@/app/components/asesoria-migratoria/CoberturaSlider";
import ServiceCarousel from "@/app/components/asesoria-migratoria/ServiceCarousel";


export default function AsesoriaMigratori() 
{
  return (
    <SiteLayout>
      <Breadcrumb />
      <AsesoriaMigratoria />
      <ProblemaRealMigracion />
      <CoberturaSlider />
      <ServiceCarousel />

    </SiteLayout>
  );
}