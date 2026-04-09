import Breadcrumb from "@/app/components/layout/Breadcrumb";
import FinanzasHero from "@/app/components/finanzas/FinanzasHero";

import DiagnosticoSection from "@/app/components/finanzas/sections/DiagnosticoSection";
import ProductosSection from "@/app/components/finanzas/sections/ProductosSection";
import TestimoniosFinanzasSection from "@/app/components/finanzas/sections/TestimoniosFinanzasSection";
import FaqSection from "@/app/components/finanzas/sections/FaqSection";
import CtaFinalFinanzas from "@/app/components/finanzas/sections/CtaFinalFinanzas";

export default function FinanzasPage() {
  return (
    <>
      <Breadcrumb />
      <FinanzasHero /> 
      <DiagnosticoSection />
      <ProductosSection />
      <TestimoniosFinanzasSection />
      
      <FaqSection />
      <CtaFinalFinanzas />
    </>
  );
}