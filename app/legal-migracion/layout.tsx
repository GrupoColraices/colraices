import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Legal y Migración",
  description:
    "Recibe orientación legal, migratoria, fiscal y empresarial con Colraices para avanzar con seguridad en tus planes dentro y fuera de Colombia.",
};

export default function LegalMigracionLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}