import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: {
    absolute: "Emprender en Colombia desde el exterior | Asesoría en emprendimiento",
  },
  description:
    "Te orientamos para iniciar empresa, formalizar emprendimientos y desarrollar proyectos de negocio e inversión en Colombia desde el exterior.",
};

export default function ConstitucionEmpresasLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
