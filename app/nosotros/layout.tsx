import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Sobre Nosotros",
  description:
    "Conoce la trayectoria de Colraices acompañando a colombianos en el exterior a invertir, financiar y cumplir el sueño de tener vivienda en Colombia.",
};

export default function NosotrosLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}