"use client";

import { OFFICIAL_WHATSAPP_URL } from "@/app/lib/officialUrls";

export default function CTACompra() {
  return (
    <section className="w-full flex justify-center bg-[#091D3E] py-[80px] md:min-h-[394px] md:py-0">
      <div className="w-full max-w-[1180px] px-[20px] md:px-0 flex flex-col items-center justify-center text-center">
        {/* CONTENEDOR INTERNO */}
        <div className="w-full max-w-[720px] flex flex-col items-center">
          {/* TITULO */}
          <h2 className="text-white font-semibold text-[28px] md:text-[40.85px] leading-[36px] md:leading-[47px] tracking-[0px]">
            Empieza hoy.{" "}
            <span className="text-[#FFC107] italic font-semibold">
              Compra mañana.
            </span>
          </h2>

          {/* DESCRIPCIÓN */}
          <p className="mt-[12px] max-w-[540px] text-[14px] md:text-[15.2px] leading-[22px] md:leading-[25.8px] text-white/50">
            El primer paso es saber si calificas. Llena el formulario. En 3–5 días te
            decimos si estás listo para comprar.
          </p>

          {/* BOTÓN */}
          <a
            href={OFFICIAL_WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-[26px] w-full max-w-[208.11px] h-[47.6px] rounded-full bg-[#FFC107] text-[#2A3F77] font-semibold text-[14.4px] leading-[21.6px] shadow-[0_12px_28px_rgba(255,193,7,0.28)] hover:brightness-110 transition flex items-center justify-center"
          >
            Hablar con un asesor
          </a>
        </div>
      </div>
    </section>
  );
}