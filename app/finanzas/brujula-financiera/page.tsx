import Breadcrumb from "@/app/components/layout/Breadcrumb";
import SiteLayout from "@/app/components/layout/SiteLayout";

import HeroDiagnostico from "@/app/components/brujula-financiera/HeroDiagnostico";

export default function BrujulaFinanPage() {
  return (
    <SiteLayout>
      <Breadcrumb />
      <HeroDiagnostico />
    </SiteLayout>
  );
}