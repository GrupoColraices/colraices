import type { Metadata } from "next";
import type { ReactNode } from "react";
import { officialUrls } from "@/app/lib/officialUrls";

export const metadata: Metadata = {
  title: {
    absolute: "Pensión en Colombia para colombianos en el exterior | Colraices",
  },
  description:
    "Te ayudamos a entender tu situación pensional en Colombia, revisar semanas cotizadas y avanzar en procesos de pensión desde el exterior.",
  alternates: {
    canonical: officialUrls.pensiones,
  },
  openGraph: {
    url: officialUrls.pensiones,
  },
};

export default function PensionesLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
