"use client";

import Link from "next/link";

export default function CtaBannerSection() {
  return (
    <section className="w-full bg-[#0F2D5C]">

      {/* CONTENEDOR */}
      <div className="w-full max-w-[1416.15px] mx-auto px-[156.07px] pt-[79.99px] pb-[79.99px]">

        <div className="w-full max-w-[1104px] mx-auto text-center">

          {/* TITULO */}
          <h2 className="text-white text-[40px] font-semibold leading-[54px]">
            ¿Listo para que tu remesa haga más?
          </h2>

          {/* SUBTEXTO */}
          <p className="text-white/70 text-[16px] leading-[24px] mt-[12px]">
            Empieza con una conversación. Sin compromisos, sin letra pequeña, sin enredos.
          </p>

          {/* BOTONES */}
          <div className="flex justify-center items-center gap-[12px] mt-[32px]">

            {/* BOTÓN PRINCIPAL */}
            <Link
              href="/contacto"
              className="h-[50.11px] px-[26px] flex items-center justify-center gap-[8px]
              rounded-full bg-[#FFC107] text-[#2A3F77] text-[14px] font-semibold
              shadow-[0_8px_20px_rgba(255,193,7,0.35)]
              transition-all duration-300
              hover:scale-[1.04]
              hover:shadow-[0_12px_30px_rgba(255,193,7,0.45)]"
            >
              Habla con un asesor →
            </Link>

            {/* BOTÓN SECUNDARIO */}
            <Link
              href="/servicios"
              className="h-[50.11px] px-[26px] flex items-center justify-center gap-[8px]
              rounded-full border border-white/30 text-white text-[14px] font-medium
              transition-all duration-300
              hover:bg-white hover:text-[#0F2D5C] hover:border-white"
            >
              Explora los servicios
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}