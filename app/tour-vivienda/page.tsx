import Breadcrumb from "@/app/components/layout/Breadcrumb";
import HeroTour from "@/app/components/tour-vivienda/HeroTour";
import ProximosEventos from "@/app/components/tour-vivienda/ProximosEventos";

export default function TourViviendaPage() {
  return (
    <main className="flex flex-col">
      <Breadcrumb />
      <HeroTour />
      <ProximosEventos />
    </main>
  );
}