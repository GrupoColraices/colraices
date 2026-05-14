import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Representación Legal",
  description:
    "Cuenta con representación legal de Colraices para gestionar trámites, documentos y procesos en Colombia con respaldo profesional y cercano.",
};

export default function RepresentacionLegalLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}