"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { resolveBreadcrumbs } from "@/app/lib/breadcrumbs";

type BreadcrumbProps = {
  customLabel?: string;
};

export default function Breadcrumb({ customLabel }: BreadcrumbProps) {
  const pathname = usePathname();
  const crumbs = resolveBreadcrumbs(pathname, customLabel);
  const visibleCrumbs = crumbs.slice(1);

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
          <Link href="/" className="text-[#94A3B8] hover:text-[#0F2D5C] transition-colors">
            {crumbs[0]?.label ?? "Inicio"}
          </Link>

          {visibleCrumbs.map(({ href, label }, index) => {
            const isLast = index === visibleCrumbs.length - 1;

            return (
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
            );
          })}
        </nav>
      </div>
    </section>
  );
}
