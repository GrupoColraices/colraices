import Breadcrumb from "@/app/components/layout/Breadcrumb";
import SiteLayout from "@/app/components/layout/SiteLayout";

import HeroMonetizacion from "@/app/components/monetizacion/HeroMonetizacion";
import TopBarBc from "@/app/components/monetizacion/TopBarBc";

export default function Monetizacion() {
  return (
    <SiteLayout>
      <Breadcrumb />
      <HeroMonetizacion />
      <TopBarBc />
 

    </SiteLayout>
  );
}