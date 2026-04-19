import Hero from "@/app/components/credito-hipotecario/Hero";
import Breadcrumb from "@/app/components/layout/Breadcrumb";
import StatsBar from "@/app/components/credito-hipotecario/StatsBar";
import CreditAudience from "@/app/components/credito-hipotecario/CreditAudience";
import CreditTypes from "@/app/components/credito-hipotecario/CreditTypes";
import ComoFunciona from "@/app/components/credito-hipotecario/ComoFunciona";
import FormCredito from "@/app/components/credito-hipotecario/FormCredito";
import SiteLayout from "@/app/components/layout/SiteLayout";
import HistoriasReales from "@/app/components/credito-hipotecario/HistoriasReales";
import FAQCredito from "@/app/components/credito-hipotecario/FAQCredito";


export default function BrujulaFinancieraPage() {
  return (
    <SiteLayout>
      <Breadcrumb />
      <Hero />
      <StatsBar />
      <CreditAudience />
      <CreditTypes />
      <ComoFunciona />
      <FormCredito />
      <HistoriasReales />
      <FAQCredito />
    </SiteLayout>
  );
}
