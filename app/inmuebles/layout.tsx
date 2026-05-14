import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Catálogo de Inmuebles",
  description:
    "Explora el catálogo de inmuebles de Colraices en Colombia. Encuentra opciones de vivienda, inversión y financiación para colombianos en el exterior.",
};

export default function InmueblesLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}