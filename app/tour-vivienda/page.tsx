import Breadcrumb from "@/app/components/layout/Breadcrumb";
import HeroTour from "@/app/components/tour-vivienda/HeroTour";


export default function TourViviendaPage() {
  return (
    <main className="flex flex-col">
      <Breadcrumb />
      <HeroTour />
    </main>
  );
}