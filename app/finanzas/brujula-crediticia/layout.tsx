import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: {
    absolute:
      "Saber si calificas para crédito en Colombia desde el exterior | Brújula Crediticia",
  },
  description:
    "Analizamos tu historial y perfil crediticio en Colombia para ayudarte a acceder a crédito hipotecario, mejorar tu capacidad financiera y construir patrimonio desde el exterior.",
};

export default function BrujulaCrediticiaLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
