import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Brújula Inmobiliaria",
  description:
    "Aprende a tomar mejores decisiones inmobiliarias con Colraices al comprar, invertir o elegir vivienda en Colombia desde el exterior con seguridad.",
};

export default function BrujulaInmobiliariaLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}