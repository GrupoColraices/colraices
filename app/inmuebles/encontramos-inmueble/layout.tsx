import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Encontramos tu Inmueble",
  description:
    "Recibe apoyo de Colraices para encontrar el inmueble ideal en Colombia según tu presupuesto, ciudad de interés y objetivo de inversión familiar.",
};

export default function EncontramosInmuebleLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}