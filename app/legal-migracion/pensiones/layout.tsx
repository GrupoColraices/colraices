import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: {
    absolute: "Pensión en Colombia para colombianos en el exterior | Colraices",
  },
  description:
    "Te ayudamos a entender tu situación pensional en Colombia, revisar semanas cotizadas y avanzar en procesos de pensión desde el exterior.",
};

export default function PensionesLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
