import type { Metadata } from "next";
import type { ReactNode } from "react";
import { officialUrls } from "@/app/lib/officialUrls";

export const metadata: Metadata = {
  title: {
    absolute: "Enviar dinero a Colombia desde el exterior | Colraices",
  },
  description:
    "Envía dinero a Colombia desde el exterior y transforma tus remesas en inversión, vivienda y patrimonio con acompañamiento financiero especializado.",
  alternates: {
    canonical: officialUrls.monetizacion,
  },
  openGraph: {
    url: officialUrls.monetizacion,
  },
};

export default function MonetizacionLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
