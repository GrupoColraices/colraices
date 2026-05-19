import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: {
    absolute: "Enviar dinero a Colombia desde el exterior | Colraices",
  },
  description:
    "Envía dinero a Colombia desde el exterior y transforma tus remesas en inversión, vivienda y patrimonio con acompañamiento financiero especializado.",
};

export default function MonetizacionLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
