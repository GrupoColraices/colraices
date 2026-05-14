import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Constitución de Empresas",
  description:
    "Constituye tu empresa con acompañamiento de Colraices y recibe orientación para formalizar proyectos, inversiones y operaciones en Colombia.",
};

export default function ConstitucionEmpresasLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}