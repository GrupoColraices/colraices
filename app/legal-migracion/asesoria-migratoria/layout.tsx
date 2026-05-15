import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Asesoría Migratoria",
  description:
    "Obtén asesoría migratoria con Colraices para resolver dudas, preparar procesos y tomar decisiones informadas como colombiano en el exterior.",
};

export default function AsesoriaMigratoriaLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}