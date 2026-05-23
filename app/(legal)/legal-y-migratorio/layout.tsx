import type { Metadata } from "next";
import type { ReactNode } from "react";
import { officialUrls } from "@/app/lib/officialUrls";

export const metadata: Metadata = {
  title: {
    absolute: "Servicios legales y migratorios para colombianos | Colraices",
  },
  description:
    "Gestionamos procesos migratorios, representación legal, impuestos, pensiones y creación de empresa con apoyo especializado.",
  alternates: {
    canonical: officialUrls.legalHub,
  },
  openGraph: {
    url: officialUrls.legalHub,
  },
};

export default function LegalMigracionLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
