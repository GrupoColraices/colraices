"use client";

import type { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { usePathname } from "next/navigation";

export default function SiteLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  const isInmuebles = pathname.startsWith("/inmuebles");

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      
      <Navbar />

      <main className="flex-1 pt-[68px]">
        {children}
      </main>

      {!isInmuebles && <Footer />}
    </div>
  );
}