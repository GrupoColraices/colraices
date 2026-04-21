import HeroInmuebles from "@/app/components/inmuebles/HeroInmuebles";
import QuoteInmuebles from "@/app/components/inmuebles/QuoteInmuebles";
import Breadcrumb from "@/app/components/layout/Breadcrumb";
import SiteLayout from "@/app/components/layout/SiteLayout";

export default function InmueblesPage() {
  return (

    <SiteLayout>
      <Breadcrumb />
      <HeroInmuebles />
      <QuoteInmuebles />
    </SiteLayout>
  );
} 