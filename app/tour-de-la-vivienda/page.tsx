import Breadcrumb from "@/app/components/layout/Breadcrumb";
import HeroTour from "@/app/components/tour-vivienda/HeroTour";
import ProximosEventos from "@/app/components/tour-vivienda/ProximosEventos";
import SiteLayout from "@/app/components/layout/SiteLayout";

export default function TourViviendaPage() {
  return (
    <SiteLayout>
      <Breadcrumb />
      <HeroTour />
      <ProximosEventos />
    </SiteLayout>
  );
}