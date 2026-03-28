"use client";

import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Finanzas", href: "/finanzas" },
  { label: "Inmuebles", href: "/inmuebles" },
  { label: "Legal y Migración", href: "/legal" },
  { label: "Tour de la Vivienda", href: "/tour" },
  { label: "Blog", href: "/blog" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#F4F6F8] border-b border-black/5">
      
      <div className="max-w-[1416px] mx-auto px-6 lg:px-[156px] h-[68px] flex items-center justify-between">
        
        {/* LOGO */}
        <Link href="/">
          <img
            src="/logo.png"
            alt="Colraices"
            className="h-[28px] w-auto"
          />
        </Link>

        {/* NAV */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[#475569] text-[14px] font-medium hover:text-[#0F2D5C] transition"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <Link
          href="/contacto"
          className="hidden lg:flex items-center justify-center px-6 h-[40px] rounded-full bg-[#0F2D5C] text-white text-[14px] font-semibold hover:bg-[#123A75] transition"
        >
          Solicitar Asesoría
        </Link>
      </div>
    </header>
  );
}