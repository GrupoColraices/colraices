import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: {
    absolute: "Crédito hipotecario para colombianos en el exterior | Colraices",
  },
  description:
    "Accede a crédito hipotecario, leasing habitacional y préstamos de libre inversión en Colombia viviendo en el exterior. Financia vivienda, inversión y patrimonio con acompañamiento especializado.",
};

export default function FinanzasLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
