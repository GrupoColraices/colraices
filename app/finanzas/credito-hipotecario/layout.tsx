import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Crédito Hipotecario",
  description:
    "Conoce opciones de crédito hipotecario en Colombia con Colraices y recibe acompañamiento para financiar tu vivienda desde el exterior con confianza.",
};

export default function CreditoHipotecarioLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}