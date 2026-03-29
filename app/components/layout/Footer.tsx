"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#091D3E] text-white">
      <div className="w-full max-w-[1416.15px] mx-auto px-[156.07px] pt-[63.99px] pb-0">
        <div className="w-full max-w-[1104px] mx-auto">
          {/* TOP CONTENT */}
          <div className="grid grid-cols-1 lg:grid-cols-[383.99px_192px_192px_192px] gap-[48px] items-start">
            {/* BRAND */}
            <div className="w-full">
              <Image
                src="/logo2.png"
                alt="Colraices"
                width={285}
                height={40}
                className="w-[284.61px] h-[39.99px] object-contain"
                priority
              />

              <p className="mt-[11.99px] max-w-[240px] text-[13.12px] leading-[21px] text-white/40">
                El ecosistema de soluciones para colombianos en el exterior.
              </p>

              <div className="mt-[17.99px] flex items-center gap-[7.99px]">
                {[
                  { label: "in", href: "#" },
                  { label: "ig", href: "#" },
                  { label: "tk", href: "#" },
                  { label: "yt", href: "#" },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    aria-label={item.label}
                    className="
                      w-[34px] h-[34px]
                      flex items-center justify-center
                      rounded-[8px]
                      border border-white/7
                      bg-white/10
                      text-[13px]
                      text-white/50
                      transition-all duration-300
                      hover:bg-white/14
                      hover:text-white
                      hover:-translate-y-[1px]
                    "
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            {/* COLUMN 1 */}
            <div className="w-full">
              <h3 className="text-[11.52px] leading-[17.27px] font-bold uppercase text-white">
                Servicios
              </h3>

              <nav className="mt-[17.98px] flex flex-col gap-[14px] text-[13.12px] leading-[19.68px] text-white/45">
                {[
                  ["Finanzas", "/finanzas"],
                  ["Inmuebles", "/inmuebles"],
                  ["Legal y Migración", "/legal-y-migracion"],
                  ["Tour de la Vivienda", "/tour"],
                ].map(([label, href]) => (
                  <Link
                    key={label}
                    href={href}
                    className="w-fit transition-colors duration-200 hover:text-white"
                  >
                    {label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* COLUMN 2 */}
            <div className="w-full">
              <h3 className="text-[11.52px] leading-[17.27px] font-bold uppercase text-white">
                Empresa
              </h3>

              <nav className="mt-[17.98px] flex flex-col gap-[14px] text-[13.12px] leading-[19.68px] text-white/45">
                {[
                  ["Quiénes somos", "/quienes-somos"],
                  ["Momentum", "/momentum"],
                  ["Colraices España", "/espana"],
                  ["Trabaja con nosotros", "/trabaja-con-nosotros"],
                ].map(([label, href]) => (
                  <Link
                    key={label}
                    href={href}
                    className="w-fit transition-colors duration-200 hover:text-white"
                  >
                    {label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* COLUMN 3 */}
            <div className="w-full">
              <h3 className="text-[11.52px] leading-[17.27px] font-bold uppercase text-white">
                Recursos
              </h3>

              <nav className="mt-[17.98px] flex flex-col gap-[14px] text-[13.12px] leading-[19.68px] text-white/45">
                {[
                  ["Blog", "/blog"],
                  ["Guías", "/guias"],
                  ["Preguntas frecuentes", "/preguntas-frecuentes"],
                ].map(([label, href]) => (
                  <Link
                    key={label}
                    href={href}
                    className="w-fit transition-colors duration-200 hover:text-white"
                  >
                    {label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>

          {/* DIVIDER + BOTTOM ROW */}
          <div className="mt-[48px] border-t border-white/7 pt-[17.99px] pb-[33.99px]">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <p className="text-[12px] leading-[18px] text-white/28">
                © 2026 Colraices. Colombia y España. Todos los derechos reservados.
              </p>

              <div className="flex flex-wrap items-center gap-[24px] text-[12px] leading-[18px] text-white/50">
                <Link href="/privacidad" className="transition-colors duration-200 hover:text-white">
                  Política de privacidad
                </Link>
                <Link href="/terminos" className="transition-colors duration-200 hover:text-white">
                  Términos de uso
                </Link>
                <Link href="/cookies" className="transition-colors duration-200 hover:text-white">
                  Cookies
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}