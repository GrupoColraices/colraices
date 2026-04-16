import type { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />

      <main
        className="
        flex-1
        pt-[69px]
        sm:pt-[72px]
        md:pt-[76px]
      "
      >
        {children}
      </main>

      <Footer />
    </div>
  );
}