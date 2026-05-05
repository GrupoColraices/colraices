import Breadcrumb from "@/app/components/layout/Breadcrumb";
import SiteLayout from "@/app/components/layout/SiteLayout";

import FiscalHero from "@/app/components/servicios-fiscales/FiscalHero";
import FiscalConfusionSection from "@/app/components/servicios-fiscales/FiscalConfusionSection";
import BeliefsSection from "@/app/components/servicios-fiscales/BeliefsSection";
import TributosSection from "@/app/components/servicios-fiscales/TributosSection";
import FiscalDiagnosticSection from "@/app/components/servicios-fiscales/FiscalDiagnosticSection";
import PerfilamientoSection from "@/app/components/servicios-fiscales/PerfilamientoSection";
import QuoteFiscal from "@/app/components/servicios-fiscales/QuoteFiscal";

export default function Penciones() 
{
  return (
    <SiteLayout>
      <Breadcrumb />
      <FiscalHero />
      <FiscalConfusionSection />
      <BeliefsSection />
      <TributosSection />
      <FiscalDiagnosticSection /> 
      <PerfilamientoSection />      
      <QuoteFiscal />      
        
      
    
    </SiteLayout>
  );
}