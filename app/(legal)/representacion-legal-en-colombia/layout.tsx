import type { Metadata } from "next";
import type { ReactNode } from "react";
import { officialUrls } from "@/app/lib/officialUrls";

export const metadata: Metadata = {
  title: {
    absolute: "Firma de escrituras en Colombia desde el exterior | Colraices",
  },
  description:
    "Si estás fuera del país y necesitas alguien que te represente en Colombia, te acompañamos en la firma de escrituras y procesos legales de vivienda.",
  alternates: {
    canonical: officialUrls.representacionLegal,
  },
  openGraph: {
    url: officialUrls.representacionLegal,
  },
};

export default function RepresentacionLegalLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
