import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Tour de la Vivienda",
  description:
    "Descubre el Tour de la Vivienda de Colraices y conoce alternativas para comprar, invertir y financiar inmuebles en Colombia desde el exterior.",
};

export default function TourViviendaLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}