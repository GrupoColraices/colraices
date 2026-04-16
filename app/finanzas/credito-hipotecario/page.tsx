import Hero from "@/app/components/credito-hipotecario/Hero";
import Breadcrumb from "@/app/components/layout/Breadcrumb";
import StatsBar from "@/app/components/credito-hipotecario/StatsBar";
import CreditAudience from "@/app/components/credito-hipotecario/CreditAudience";
import CreditTypes from "@/app/components/credito-hipotecario/CreditTypes";


export default function BrujulaFinancieraPage() {
  return (
    <main className="flex flex-col overflow-x-hidden">
      <Breadcrumb />
      <Hero />
      <StatsBar />
      <CreditAudience />
      <CreditTypes />
    </main>
  );
}
