import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: {
    absolute: "Servicios legales y migratorios para colombianos | Colraices",
  },
  description:
    "Gestionamos procesos migratorios, representación legal, impuestos, pensiones y creación de empresa con apoyo especializado.",
};

export default function LegalMigracionLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
