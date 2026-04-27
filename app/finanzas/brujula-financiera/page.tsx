import Breadcrumb from "@/app/components/layout/Breadcrumb";
import SiteLayout from "@/app/components/layout/SiteLayout";

import HeroDiagnostico from "@/app/components/brujula-financiera/HeroDiagnostico";
import ProblemaSolucionSection from "@/app/components/brujula-financiera/ProblemaSolucionSection";
import ProcesoSection from "@/app/components/brujula-financiera/ProcesoSection";
import ClaridadTotalBf from "@/app/components/brujula-financiera/ClaridadTotalBf";
import FAQSectionBf from "@/app/components/brujula-financiera/FAQSectionBf";
import CTASectionBf from "@/app/components/brujula-financiera/CTASectionBf";



export default function BrujulaFinanPage() {
  return (
    <SiteLayout>
      <Breadcrumb />
      <HeroDiagnostico />
      <ProblemaSolucionSection />
      <ProcesoSection />
      <ClaridadTotalBf />
      <FAQSectionBf />
      <CTASectionBf />
    </SiteLayout>
  );
}