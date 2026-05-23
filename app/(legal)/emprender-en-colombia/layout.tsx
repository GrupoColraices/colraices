import type { Metadata } from "next";
import type { ReactNode } from "react";
import { officialUrls } from "@/app/lib/officialUrls";

export const metadata: Metadata = {
  title: {
    absolute: "Emprender en Colombia desde el exterior | Asesoría en emprendimiento",
  },
  description:
    "Te orientamos para iniciar empresa, formalizar emprendimientos y desarrollar proyectos de negocio e inversión en Colombia desde el exterior.",
  alternates: {
    canonical: officialUrls.emprendimiento,
  },
  openGraph: {
    url: officialUrls.emprendimiento,
  },
};

export default function ConstitucionEmpresasLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
