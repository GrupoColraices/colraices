import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Brújula Financiera",
  description:
    "Organiza tus finanzas con Colraices y conoce herramientas para planear ahorro, inversión y compra de vivienda en Colombia desde el exterior.",
};

export default function BrujulaFinancieraLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}