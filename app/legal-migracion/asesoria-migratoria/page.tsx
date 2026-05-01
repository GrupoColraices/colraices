import Breadcrumb from "@/app/components/layout/Breadcrumb";
import SiteLayout from "@/app/components/layout/SiteLayout";

import AsesoriaMigratoria from "@/app/components/asesoria-migratoria/AsesoriaMigratoria";

export default function LegalMigracionPage() {
  return (
    <SiteLayout>
      <Breadcrumb />
      <AsesoriaMigratoria />

    </SiteLayout>
  );
}