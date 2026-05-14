import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Buena Data",
  description:
    "Accede a datos útiles de Colraices para tomar mejores decisiones sobre inversión, financiación y compra de vivienda en Colombia desde el exterior.",
};

export default function BuenaDataLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}