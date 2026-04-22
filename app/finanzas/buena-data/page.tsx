import Breadcrumb from "@/app/components/layout/Breadcrumb";
import BdHero from "@/app/components/buena-data/BdHero";
import SiteLayout from "@/app/components/layout/SiteLayout";
import Buenadatasection from "@/app/components/buena-data/Buenadatasection";
import ServicioIncluye from "@/app/components/buena-data/ServicioIncluye";


export default function BuenaDataPage() {
  return (
    <SiteLayout>
      <Breadcrumb />
      <BdHero />
      <Buenadatasection />
      <ServicioIncluye />
    </SiteLayout>
  );
}