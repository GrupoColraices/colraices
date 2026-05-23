"use client";

import type { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { usePathname } from "next/navigation";
import { officialPaths } from "@/app/lib/officialUrls";

export default function SiteLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  // Oculta el footer SOLO en la página general de inmuebles
  const isInmuebles = pathname === officialPaths.inmuebleHub;

  // Ocultar footer también en monetización
  const isMonetizacion =
    pathname === officialPaths.monetizacion ||
    pathname.startsWith(`${officialPaths.monetizacion}/`);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />

      <main className="flex-1 pt-[68px]">
        {children}
      </main>

      {!isInmuebles && !isMonetizacion && <Footer />}
    </div>
  );
}
