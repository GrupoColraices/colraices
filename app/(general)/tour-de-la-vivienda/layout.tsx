import type { Metadata } from "next";
import type { ReactNode } from "react";
import { TOUR_VIVIENDA_URL } from "@/app/lib/officialUrls";

export const metadata: Metadata = {
  title: {
    absolute:
      "Tour de la Vivienda Colombia | Inversión, crédito y proyectos en Colombia",
  },
  description:
    "Accede a proyectos de vivienda, oportunidades de inversión y beneficios en Colombia para colombianos en el exterior con financiación y acompañamiento especializado.",
  alternates: {
    canonical: TOUR_VIVIENDA_URL,
  },
  openGraph: {
    url: TOUR_VIVIENDA_URL,
  },
};

export default function TourViviendaLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
