import Link from "next/link";

export default function CtaFinalFinanzas() {
  return (
    <section className="w-full bg-[#0F2D5C] py-[96px]">
      <div className="w-full max-w-[1416px] mx-auto px-6 md:px-[156px] text-center">
        <h2 className="text-white text-[40px] font-semibold mb-4">
          ¿Listo para dar el siguiente paso?
        </h2>
        <p className="text-white/70 mb-8">
          Aquí va el cierre final de la página de finanzas.
        </p>

        <Link
          href="/contacto"
          className="inline-flex items-center justify-center h-[50px] px-[28px] rounded-full bg-[#FFC107] text-[#2A3F77] text-[14px] font-semibold"
        >
          Habla con un asesor →
        </Link>
      </div>
    </section>
  );
}