"use client";

import "./globals.css";
import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";
import { Montserrat } from "next/font/google";
import { usePathname } from "next/navigation";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const hideFooter = pathname.startsWith("/inmuebles");

  return (
    <html lang="es">
      <body className={montserrat.className}>
        
        <Navbar />
        
        <main className="pt-[68px]">
          {children}
        </main>

        {/* 👇 AQUÍ está la magia */}
        {!hideFooter && <Footer />}
      </body>
    </html>
  );
}