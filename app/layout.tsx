import "./globals.css";
import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>

        <Navbar />

        {/* 🔥 IMPORTANTE: compensar navbar fixed */}
        <main className="pt-[68px]">
          {children}
        </main>

        <Footer />

      </body>
    </html>
  );
}