import Breadcrumb from "@/app/components/layout/Breadcrumb";
import SiteLayout from "@/app/components/layout/SiteLayout";

import HeroBrujulaCrediticia from "@/app/components/brujula-crediticia/HeroBrujulaCrediticia";
import ZonaGrisBc from "@/app/components/brujula-crediticia/ZonaGrisBc";
import ParaQuienEsBc from "@/app/components/brujula-crediticia/ParaQuienEsBc";
import CuatroComponentesBc from "@/app/components/brujula-crediticia/CuatroComponentesBc";



export default function BrujulaCredi() {
  return (
    <SiteLayout>
      <Breadcrumb />
      <HeroBrujulaCrediticia />
      <ZonaGrisBc />
      <ParaQuienEsBc />
      <CuatroComponentesBc />
      
    </SiteLayout>
  );
}