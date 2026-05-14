import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Lee artículos de Colraices sobre vivienda, inversión, finanzas, migración y oportunidades para colombianos en el exterior que quieren comprar en Colombia.",
};

export default function BlogLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}