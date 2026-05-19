import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: {
    absolute:
      "Comprar vivienda en Colombia desde el exterior | Te ayudamos a encontrarla",
  },
  description:
    "Te ayudamos a encontrar la casa o apartamento que buscas en Colombia según tu presupuesto, necesidades y objetivos de inversión viviendo en el exterior.",
};

export default function EncontramosInmuebleLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
