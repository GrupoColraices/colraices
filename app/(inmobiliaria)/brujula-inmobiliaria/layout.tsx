import type { Metadata } from "next";
import type { ReactNode } from "react";
import { officialUrls } from "@/app/lib/officialUrls";

export const metadata: Metadata = {
  title: {
    absolute:
      "Comprar vivienda usada en Colombia desde el exterior | Análisis y validación",
  },
  description:
    "Analizamos inmuebles usados en Colombia para colombianos en el exterior. Verificamos documentos, riesgos jurídicos, precio y viabilidad para crédito hipotecario.",
  alternates: {
    canonical: officialUrls.brujulaInmobiliaria,
  },
  openGraph: {
    url: officialUrls.brujulaInmobiliaria,
  },
};

export default function BrujulaInmobiliariaLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
