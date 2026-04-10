import Breadcrumb from "@/app/components/layout/Breadcrumb";
import HeroLegal from "@/app/components/legal-migracion/HeroLegal";
import ServiciosSection from "@/app/components/legal-migracion/ServiciosSection";
import ComoTrabajamos from '../components/legal-migracion/Como-Trabajamos';

export default function LegalMigracionPage() {
  return (
    <main>

      <Breadcrumb />
      
      <HeroLegal />
      <ServiciosSection/>
      <ComoTrabajamos />
    </main>
  );
}