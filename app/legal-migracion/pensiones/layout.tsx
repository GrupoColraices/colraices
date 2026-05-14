import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Pensiones",
  description:
    "Recibe orientación sobre pensiones con Colraices y conoce alternativas para planear tu futuro financiero como colombiano en el exterior.",
};

export default function PensionesLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}