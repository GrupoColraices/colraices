import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: {
    absolute: "Cómo emigrar legalmente desde Colombia | Asesoría migratoria",
  },
  description:
    "Te ayudamos a elegir la mejor ruta para emigrar desde Colombia con orientación en visas, residencia, permisos y procesos migratorios hacia otros países.",
};

export default function AsesoriaMigratoriaLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
