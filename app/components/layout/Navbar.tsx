"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Finanzas", href: "/finanzas" },
  { label: "Inmuebles", href: "/inmuebles" },
  { label: "Legal y Migración", href: "/legal-migracion" },
  { label: "Tour de la Vivienda", href: "/tour-vivienda" },
  { label: "Blog", href: "/blog" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

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

        {/* NAV DESKTOP */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`
                  group relative
                  text-[14px] leading-[21px]
                  transition-all duration-200

                  ${isActive
                    ? "text-[#0F2D5C] font-semibold"
                    : "text-[#475569] font-medium hover:text-[#0F2D5C]"
                  }
                `}
              >
                <span className="relative inline-block pb-[4px]">
                  {link.label}

                  <span
                    className={`
                      absolute left-0 bottom-0 h-[2px] w-full bg-[#FFC107]

                      ${isActive
                        ? "scale-x-100 origin-left"
                        : "scale-x-0 origin-right group-hover:scale-x-100 group-hover:origin-left"
                      }

                      transition-transform duration-300 
                      ease-[cubic-bezier(0.22,1,0.36,1)]
                    `}
                  />
                </span>
              </Link>
            );
          })}
        </nav>

        {/* CTA DESKTOP */}
        <Link
          href="/contacto"
          className="
            hidden lg:flex items-center justify-center 
            px-6 h-[40px] rounded-full 
            bg-[#0F2D5C] text-white 
            text-[14px] font-semibold
            transition-all duration-300 
            ease-[cubic-bezier(0.22,1,0.36,1)]
            hover:bg-[#0B254A]
            hover:-translate-y-[2px]
            hover:shadow-[0_3px_8px_rgba(0,0,0,0.10)]
            active:translate-y-0
            active:shadow-[0_2px_6px_rgba(0,0,0,0.08)]
          "
        >
          Solicitar Asesoría
        </Link>

        {/* BOTÓN MOBILE */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden flex flex-col justify-center items-center gap-[4px]"
        >
          <span className={`w-6 h-[2px] bg-[#0F2D5C] transition-all ${isOpen ? "rotate-45 translate-y-[6px]" : ""}`} />
          <span className={`w-6 h-[2px] bg-[#0F2D5C] transition-all ${isOpen ? "opacity-0" : ""}`} />
          <span className={`w-6 h-[2px] bg-[#0F2D5C] transition-all ${isOpen ? "-rotate-45 -translate-y-[6px]" : ""}`} />
        </button>
      </div>

      {/* MENÚ MOBILE */}
      <div
        className={`
          lg:hidden bg-[#F4F6F8] border-t border-black/5
          overflow-hidden transition-all duration-300
          ${isOpen ? "max-h-[500px] py-4" : "max-h-0"}
        `}
      >
        <div className="flex flex-col px-6 gap-4">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`
                  text-[15px]
                  ${isActive
                    ? "text-[#0F2D5C] font-semibold"
                    : "text-[#475569]"
                  }
                `}
              >
                {link.label}
              </Link>
            );
          })}

          {/* CTA MOBILE */}
          <Link
            href="/contacto"
            onClick={() => setIsOpen(false)}
            className="
              mt-2 flex items-center justify-center
              h-[42px] rounded-full
              bg-[#0F2D5C] text-white
              text-[14px] font-semibold
            "
          >
            Solicitar Asesoría
          </Link>
        </div>
      </div>
    </header>
  );
}