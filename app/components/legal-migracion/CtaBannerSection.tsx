"use client";

import Link from "next/link";

export default function CtaBannerSection() {
  return (
    <section className="w-full min-h-[345.13px] bg-[linear-gradient(90deg,#0F2D5C_0%,#1A4F9E_100%)] flex items-center">
      <div className="mx-auto w-full max-w-[1180px] px-4 md:px-6 lg:px-0">
        <div className="mx-auto flex w-full max-w-[1084px] flex-col items-center text-center py-[26px] md:py-[30px] lg:py-0">
          <h2
            className="text-white font-bold leading-[1.2] tracking-[-0.01em] text-[34px] md:text-[42px] lg:text-[47.81px] lg:leading-[57.4px]"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            ¿Listo para estar <span className="text-[#FFC107] italic">en regla?</span>
          </h2>

          <p
            className="mt-[14px] md:mt-[18px] lg:mt-[16px] w-full max-w-[800px] text-white/65 text-[14px] md:text-[15px] lg:text-[16.8px] leading-[24px] lg:leading-[28.6px]"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Agenda una consulta inicial y te explicamos cómo podemos ayudarte con tu caso específico.
          </p>

          <div className="mt-[24px] md:mt-[28px] lg:mt-[32px] flex w-full max-w-[1084px] flex-col sm:flex-row items-center justify-center gap-[12px] lg:gap-[14px]">
            <Link
              href="/contacto"
              className="inline-flex h-[51.2px] w-full sm:w-[228.75px] items-center justify-center rounded-[50px] bg-[#FFC107] text-[#091D3E] text-[14.4px] font-semibold leading-[21.6px] tracking-[0.43px] shadow-[0_8px_20px_rgba(255,193,7,0.35)] transition-all duration-300 hover:scale-[1.04] hover:shadow-[0_12px_30px_rgba(255,193,7,0.45)]"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Hablar con un asesor
            </Link>

            <Link
              href="/servicios"
              className="inline-flex h-[51.2px] w-full sm:w-[225.53px] items-center justify-center rounded-[50px] border-[0.8px] border-white/25 text-white text-[14.4px] font-semibold leading-[21.6px] tracking-[0.43px] transition-all duration-300 hover:bg-white hover:text-[#0F2D5C] hover:border-white"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Ver todos los servicios
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}