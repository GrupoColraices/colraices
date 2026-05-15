import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Finanzas",
  description:
    "Conoce soluciones financieras de Colraices para colombianos en el exterior: crédito hipotecario, inversión, monetización y asesoría para comprar vivienda.",
};

export default function FinanzasLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}