import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: {
    absolute:
      "Estoy reportado en Datacrédito y vivo en el exterior | Buena Data",
  },
  description:
    "Revisamos tu historial crediticio en Colombia y te ayudamos a resolver reportes negativos para acceder nuevamente a crédito e inversión desde el exterior.",
};

export default function BuenaDataLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
