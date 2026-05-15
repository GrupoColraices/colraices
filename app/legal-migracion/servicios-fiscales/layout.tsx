import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Servicios Fiscales",
  description:
    "Recibe asesoría fiscal con Colraices para entender obligaciones, planear inversiones y tomar decisiones financieras entre Colombia y el exterior.",
};

export default function ServiciosFiscalesLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}