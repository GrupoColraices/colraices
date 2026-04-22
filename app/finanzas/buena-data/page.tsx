import BdHero from "@/app/components/buena-data/BdHero";
import SiteLayout from "@/app/components/layout/SiteLayout";
import Buenadatasection from "@/app/components/buena-data/Buenadatasection";


export default function BuenaDataPage() {
  return (
    <SiteLayout>
      <BdHero />
      <Buenadatasection />
    </SiteLayout>
  );
}