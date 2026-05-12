import type { ReactNode } from "react";
import "./globals.css";
import { Montserrat } from "next/font/google";
import FloatingContactButton from "./components/layout/FloatingContactButton";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="es">
      <body className={montserrat.className}>
        {children}
        <FloatingContactButton />
      </body>
    </html>
  );
}