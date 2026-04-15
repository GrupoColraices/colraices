import Hero from "@/app/components/brujula-financiera/Hero";
import Breadcrumb from "@/app/components/layout/Breadcrumb";

export default function BrujulaFinancieraPage() {
  return (
    <main className="flex flex-col overflow-x-hidden">
      <Breadcrumb />
      <Hero />
    </main>
  );
}