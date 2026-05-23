import type { Metadata } from "next";
import type { ReactNode } from "react";
import { officialUrls } from "@/app/lib/officialUrls";

export const metadata: Metadata = {
  title: {
    absolute:
      "Comprar vivienda en Colombia desde el exterior | Te ayudamos a encontrarla",
  },
  description:
    "Te ayudamos a encontrar la casa o apartamento que buscas en Colombia según tu presupuesto, necesidades y objetivos de inversión viviendo en el exterior.",
  alternates: {
    canonical: officialUrls.llaveInmobiliaria,
  },
  openGraph: {
    url: officialUrls.llaveInmobiliaria,
  },
};

export default function EncontramosInmuebleLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
