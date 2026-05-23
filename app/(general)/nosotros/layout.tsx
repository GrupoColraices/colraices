import type { Metadata } from "next";
import type { ReactNode } from "react";
import { officialUrls } from "@/app/lib/officialUrls";

export const metadata: Metadata = {
  title: {
    absolute: "Nosotros| Colraices, ecosistema para colombianos en el exterior",
  },
  description:
    "Somos el ecosistema que ayuda a colombianos en el exterior a transformar sus remesas en inversión, patrimonio y oportunidades en Colombia.",
  alternates: {
    canonical: officialUrls.nosotros,
  },
  openGraph: {
    url: officialUrls.nosotros,
  },
};

export default function NosotrosLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
