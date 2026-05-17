import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: {
    absolute: "Asesoría tributaria para colombianos que viven fuera del país",
  },
  description:
    "Te ayudamos a entender tus obligaciones tributarias en Colombia, declarar renta y manejar impuestos sobre inversiones, vivienda y patrimonio.",
};

export default function ServiciosFiscalesLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
