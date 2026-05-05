"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const routeNameMap: Record<string, string> = {
  "finanzas": "Finanzas",
  "inmuebles": "Inmuebles",
  "legal-migracion": "Legal y Migración",
  "tour-vivienda": "Tour de la Vivienda",
  "blog": "Blog",
  "brujula-financiera": "Brújula Financiera",
  "brujula-crediticia": "Brújula Crediticia",
  "buena-data": "Buena Data",
  "credito-hipotecario": "Crédito Hipotecario",
  "monetizacion": "Monetización",
  "asesoria-migratoria": "Asesoría Migratoria",
  "constitucion-empresas": "Constitución de Empresas",
  "pensiones": "Pensiones",
  "representacion-legal": "Representación Legal",
  "servicios-fiscales": "Servicios Fiscales",
  "encontramos-inmueble": "Encontramos tu inmueble",
};

export default function Breadcrumb() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  const crumbs = segments.map((seg, i) => {
    const href = "/" + segments.slice(0, i + 1).join("/");
    const label = routeNameMap[seg] || seg;
    const isLast = i === segments.length - 1;
    return { href, label, isLast };
  });

  return (
    <section
      className="
      w-full
      bg-[#FBF8F3]
      border-b border-[#0F2D5C]/10
    "
    >
      <div
        className="
        w-full
        max-w-[1416.15px]
        mx-auto
        px-[16px]
        sm:px-[32px]
        md:px-[80px]
        lg:px-[156.07px]
        py-[8px] sm:py-[10px]
        flex items-center
      "
      >
        <nav
          className="
          flex flex-wrap items-center
          text-[12px] sm:text-[13px]
          leading-tight
          gap-y-1
        "
        >
          <Link
            href="/"
            className="text-[#94A3B8] hover:text-[#0F2D5C] transition-colors"
          >
            Inicio
          </Link>

          {crumbs.map(({ href, label, isLast }) => (
            <span key={href} className="flex items-center max-w-full">
              <span className="mx-1 sm:mx-2 text-[#CBD5E1]">›</span>

              {isLast ? (
                <span
                  className="
                  text-[#0F2D5C]
                  font-medium
                  truncate
                  max-w-[140px] sm:max-w-[200px] md:max-w-none
                "
                >
                  {label}
                </span>
              ) : (
                <Link
                  href={href}
                  className="
                  text-[#94A3B8]
                  hover:text-[#0F2D5C]
                  transition-colors
                  truncate
                  max-w-[120px] sm:max-w-[160px] md:max-w-none
                "
                >
                  {label}
                </Link>
              )}
            </span>
          ))}
        </nav>
      </div>
    </section>
  );
}