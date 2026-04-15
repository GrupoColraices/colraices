import Hero from "@/app/components/credito-hipotecario/Hero";
import Breadcrumb from "@/app/components/layout/Breadcrumb";
import StatsBar from "@/app/components/credito-hipotecario/StatsBar";

export default function BrujulaFinancieraPage() {
  return (
    <main className="flex flex-col overflow-x-hidden">
      <Breadcrumb />
      <Hero />
      <StatsBar />
    </main>
  );
}
