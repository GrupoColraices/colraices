import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: {
    absolute:
      "Comprar vivienda e invertir en Colombia desde el exterior | Colraices",
  },
  description:
    "Encuentra apartamentos, proyectos de vivienda y oportunidades de inversión inmobiliaria en Colombia para colombianos en el exterior.",
};

export default function InmueblesLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
