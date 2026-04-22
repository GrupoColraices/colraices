import Breadcrumb from "@/app/components/layout/Breadcrumb";
import Navbar from "@/app/components/layout/Navbar";
import BdHero from "@/app/components/buena-data/BdHero";
import Buenadatasection from "@/app/components/buena-data/Buenadatasection";
import ServicioIncluye from "@/app/components/buena-data/ServicioIncluye";
import DuracionProceso from "@/app/components/buena-data/DuracionProceso";
import Garantias from "@/app/components/buena-data/Garantias";
import FAQSectionBuenaD from "@/app/components/buena-data/FAQSectionBuenaD";
import CTASection from "@/app/components/buena-data/CTASection";

export default function BuenaDataPage() {
  return (
    <>
      <Navbar />
      <div className="pt-[68px]">
        <Breadcrumb />
        <BdHero />
        <Buenadatasection />
        <ServicioIncluye />
        <DuracionProceso />
        <Garantias />
        <FAQSectionBuenaD />
        <CTASection />
      </div>
    </>
  );
}