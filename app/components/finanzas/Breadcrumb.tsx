import Link from "next/link";

export default function Breadcrumb() {
  return (
    <section className="w-full h-[39.99px] bg-[#FBF8F3] border-b border-[#0F2D5C]/10">
      <div className="w-full max-w-[1416.15px] mx-auto px-[156.07px] h-full flex items-center">
        <nav className="flex items-center text-[13px] leading-none">
          <Link href="/" className="text-[#94A3B8] hover:text-[#0F2D5C] transition-colors">
            Inicio
          </Link>
          <span className="mx-2 text-[#CBD5E1]">›</span>
          <span className="text-[#0F2D5C] font-medium">Finanzas</span>
        </nav>
      </div>
    </section>
  );
}