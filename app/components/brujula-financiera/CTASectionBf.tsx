"use client";

import { OFFICIAL_WHATSAPP_URL } from "@/app/lib/officialUrls";

export default function CTASectionBf() {
  return (
    <section className="w-full bg-[#091D3E] flex justify-center">
      <div className="w-full max-w-[1180px] px-4 md:px-8 lg:px-[48px] pt-[80px] md:pt-[100px] pb-[50px] md:pb-[60px] flex justify-center">

        {/* Aumentamos ancho para permitir 1 línea en desktop */}
        <div className="w-full max-w-[900px] flex flex-col items-center text-center">

          {/* TITULO */}
          <h2 className="text-[26px] sm:text-[32px] md:text-[38px] leading-[32px] sm:leading-[38px] md:leading-[43.7px] font-semibold text-white md:whitespace-nowrap">
            No saber cómo estás{" "}
            <span className="text-[#FFD54F] italic font-bold">
              ya no es una excusa.
            </span>
          </h2>

          {/* DESCRIPCIÓN */}
          <p className="mt-[14px] text-[14px] md:text-[15.2px] leading-[22px] md:leading-[25.8px] text-white/70 md:whitespace-nowrap">
            En 3 días tienes un diagnóstico claro de tu situación financiera en Colombia y un plan para mejorarla. Por USD $70.
          </p>

          {/* BOTÓN */}
          <a
            href={OFFICIAL_WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-[28px] w-full sm:w-auto px-[24px] md:px-[28px] py-[10px] text-[14px] md:text-[14.4px] leading-[21.6px] font-semibold text-white border border-white/40 rounded-full hover:bg-white/[0.08] hover:border-white/70 transition-all duration-300"
          >
            Hablar con un asesor
          </a>

          {/* TEXTO INFERIOR */}
          <p className="mt-[18px] text-[11px] md:text-[12px] leading-[16px] md:leading-[18px] text-white/50">
            🔒 Pago seguro · USD o EUR según tu país · Sin tarifas ocultas
          </p>

        </div>
      </div>
    </section>
  );
}