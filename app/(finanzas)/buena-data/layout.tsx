import type { Metadata } from "next";
import type { ReactNode } from "react";
import { officialUrls } from "@/app/lib/officialUrls";

export const metadata: Metadata = {
  title: {
    absolute:
      "Estoy reportado en Datacrédito y vivo en el exterior | Buena Data",
  },
  description:
    "Revisamos tu historial crediticio en Colombia y te ayudamos a resolver reportes negativos para acceder nuevamente a crédito e inversión desde el exterior.",
  alternates: {
    canonical: officialUrls.buenaData,
  },
  openGraph: {
    url: officialUrls.buenaData,
  },
};

export default function BuenaDataLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
