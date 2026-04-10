import Breadcrumb from "@/app/components/layout/Breadcrumb";
import HeroLegal from "@/app/components/legal-migracion/HeroLegal";
import ServiciosSection from "@/app/components/legal-migracion/ServiciosSection";

export default function LegalMigracionPage() {
  return (
    <main>
      {/* Breadcrumb */}
      <Breadcrumb />

      {/* Hero principal */}
      <HeroLegal />
     < ServiciosSection/>
    </main>
  );
}