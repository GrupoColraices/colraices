import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: {
    absolute:
      "Blog de inversión, finanzas y patrimonio para colombianos en el exterior | Colraices",
  },
  description:
    "Contenido especializado sobre inversión, remesas, patrimonio, crédito, finanzas y oportunidades en Colombia para colombianos que viven en el exterior.",
};

export default function BlogLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
