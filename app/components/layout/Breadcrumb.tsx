"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const routeNameMap: Record<string, string> = {
  "finanzas": "Finanzas",
  "inmuebles": "Inmuebles",
  "legal-migracion": "Legal y Migración",
  "tour-vivienda": "Tour de la Vivienda",
  "blog": "Blog",
  "brujula-financiera": "Crédito hipotecario",
  "brujula-crediticia": "Brújula Crediticia",
  "buena-data": "Buena Data",
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
    <section className="
      w-full 
      h-[36px] 
      sm:h-[40px] 
      bg-[#FBF8F3] 
      border-b border-[#0F2D5C]/10
    ">
      <div className="
        w-full 
        max-w-[1416.15px] 
        mx-auto 
        px-[16px] 
        sm:px-[32px] 
        md:px-[80px] 
        lg:px-[156.07px] 
        h-full 
        flex items-center
      ">
        <nav className="
          flex items-center 
          text-[12px] 
          sm:text-[13px] 
          leading-none 
          whitespace-nowrap
        ">
          <Link
            href="/"
            className="text-[#94A3B8] hover:text-[#0F2D5C] transition-colors"
          >
            Inicio
          </Link>

          {crumbs.map(({ href, label, isLast }) => (
            <span key={href} className="flex items-center">
              <span className="mx-1 sm:mx-2 text-[#CBD5E1]">›</span>
              {isLast ? (
                <span className="text-[#0F2D5C] font-medium truncate max-w-[120px] sm:max-w-none">
                  {label}
                </span>
              ) : (
                <Link
                  href={href}
                  className="text-[#94A3B8] hover:text-[#0F2D5C] transition-colors truncate max-w-[120px] sm:max-w-none"
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