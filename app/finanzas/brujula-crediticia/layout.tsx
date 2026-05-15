import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Brújula Crediticia",
  description:
    "Aprende cómo mejorar tu perfil crediticio y preparar tu crédito hipotecario con Colraices para comprar vivienda en Colombia desde el exterior.",
};

export default function BrujulaCrediticiaLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}