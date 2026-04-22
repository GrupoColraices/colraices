import Breadcrumb from "@/app/components/layout/Breadcrumb";
import BdHero from "@/app/components/buena-data/BdHero";
import SiteLayout from "@/app/components/layout/SiteLayout";
import Buenadatasection from "@/app/components/buena-data/Buenadatasection";
import ServicioIncluye from "@/app/components/buena-data/ServicioIncluye";
import DuracionProceso from "@/app/components/buena-data/DuracionProceso";
import Garantias from "@/app/components/buena-data/Garantias";
import FAQSectionBuenaD from "@/app/components/buena-data/FAQSectionBuenaD";

export default function BuenaDataPage() {
  return (
    <SiteLayout>
      <Breadcrumb />
      <BdHero />
      <Buenadatasection />
      <ServicioIncluye />
      <DuracionProceso />
      <Garantias />
      <FAQSectionBuenaD />
    </SiteLayout>
  );
}