import type { Metadata } from "next";
import type { ReactNode } from "react";
import { officialUrls } from "@/app/lib/officialUrls";

export const metadata: Metadata = {
  title: {
    absolute:
      "Cómo organizar tus finanzas e invertir en Colombia desde el exterior",
  },
  description:
    "Te ayudamos a entender cómo está tu historial financiero en Colombia, qué opciones tienes y por dónde empezar para invertir, acceder a crédito y construir patrimonio desde el exterior.",
  alternates: {
    canonical: officialUrls.brujulaFinanciera,
  },
  openGraph: {
    url: officialUrls.brujulaFinanciera,
  },
};

export default function BrujulaFinancieraLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
