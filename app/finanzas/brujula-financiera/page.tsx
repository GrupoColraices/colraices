import Breadcrumb from "@/app/components/layout/Breadcrumb";
import SiteLayout from "@/app/components/layout/SiteLayout";

import HeroDiagnostico from "@/app/components/brujula-financiera/HeroDiagnostico";
import ProblemaSolucionSection from "@/app/components/brujula-financiera/ProblemaSolucionSection";


export default function BrujulaFinanPage() {
  return (
    <SiteLayout>
      <Breadcrumb />
      <HeroDiagnostico />
      <ProblemaSolucionSection />
      
    </SiteLayout>
  );
}