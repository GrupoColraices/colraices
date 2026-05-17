import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: {
    absolute: "Crédito hipotecario para colombianos en el exterior | Colraices",
  },
  description:
    "Te ayudamos a acceder a crédito hipotecario en Colombia desde el exterior para comprar casa o apartamento con financiación ajustada a tu perfil financiero.",
};

export default function CreditoHipotecarioLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
