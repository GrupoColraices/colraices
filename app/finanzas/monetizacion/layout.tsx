import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Monetización",
  description:
    "Descubre alternativas de monetización con Colraices para aprovechar tus recursos, invertir mejor y avanzar hacia la compra de vivienda en Colombia.",
};

export default function MonetizacionLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}