import Link from "next/link";

export default function BreadcrumbInmuebles() {
  return (
    <section
      className="
        w-full
        h-[36px]
        sm:h-[40px]
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
          h-full
          flex items-center
        "
      >
        <nav
          className="
            flex items-center
            text-[12px]
            sm:text-[13px]
            leading-none
            whitespace-nowrap
          "
        >
          <Link
            href="/"
            className="text-[#94A3B8] hover:text-[#0F2D5C] transition-colors"
          >
            Inicio
          </Link>

          <span className="mx-1 sm:mx-2 text-[#CBD5E1]">›</span>

          <span className="text-[#0F2D5C] font-medium truncate max-w-[120px] sm:max-w-none">
            Inmuebles
          </span>
        </nav>
      </div>
    </section>
  );
}