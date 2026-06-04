"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { type MouseEvent, useState } from "react";
import { TOUR_VIVIENDA_URL, officialPaths } from "@/app/lib/officialUrls";

type NavLink = {
  label: string;
  href: string;
  scrollToTopOnSameRoute?: boolean;
};

const navLinks: NavLink[] = [
  { label: "Home", href: "/#inicio", scrollToTopOnSameRoute: true },
  { label: "Finanzas", href: officialPaths.finanzasHub, scrollToTopOnSameRoute: true },
  { label: "Inmuebles", href: officialPaths.inmuebleHub, scrollToTopOnSameRoute: true },
  { label: "Legal y Migración", href: officialPaths.legalHub, scrollToTopOnSameRoute: true },
  { label: "Tour de la Vivienda", href: TOUR_VIVIENDA_URL },
  { label: "Blog", href: officialPaths.blog, scrollToTopOnSameRoute: true },
];

const normalizeNavbarPath = (href: string) => {
  const [withoutHash] = href.split("#");
  const [withoutQuery] = withoutHash.split("?");
  const path = withoutQuery || "/";

  return path === "/" ? path : path.replace(/\/+$/, "");
};

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const handleNavbarLinkClick = (
    event: MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (normalizeNavbarPath(pathname) !== normalizeNavbarPath(href)) {
      return;
    }

    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#F4F6F8] border-b border-black/5">
      <div className="max-w-[1416px] mx-auto px-6 lg:px-[156px] h-[68px] flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="flex shrink-0 items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.png"
            alt="Colraices"
            width={118}
            height={28}
            className="h-auto w-[118px] shrink-0"
          />
        </Link>

        {/* NAV DESKTOP */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const isHomeLink = link.href === "/#inicio";
            const isActive = isHomeLink
              ? pathname === officialPaths.home
              : pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={
                  link.scrollToTopOnSameRoute === true
                    ? (event) => handleNavbarLinkClick(event, link.href)
                    : undefined
                }
                className={`
                  group relative
                  text-[14px] leading-[21px]
                  transition-all duration-200

                  ${
                    isActive
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

                      ${
                        isActive
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
          <span
            className={`w-6 h-[2px] bg-[#0F2D5C] transition-all ${
              isOpen ? "rotate-45 translate-y-[6px]" : ""
            }`}
          />
          <span
            className={`w-6 h-[2px] bg-[#0F2D5C] transition-all ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-6 h-[2px] bg-[#0F2D5C] transition-all ${
              isOpen ? "-rotate-45 -translate-y-[6px]" : ""
            }`}
          />
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
            const isHomeLink = link.href === "/#inicio";
            const isActive = isHomeLink
              ? pathname === officialPaths.home
              : pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={(event) => {
                  if (link.scrollToTopOnSameRoute === true) {
                    handleNavbarLinkClick(event, link.href);
                  }

                  setIsOpen(false);
                }}
                className={`
                  text-[15px]
                  ${
                    isActive
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
